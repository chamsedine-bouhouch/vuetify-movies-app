<template>
  <v-container>
    <v-row dense>
      <v-col>
        <v-card class="mx-auto my-12 px-6" max-width="600px">
          <v-card-title class="text-center">Login Form</v-card-title>
          <form @submit.prevent="submit">
            <!-- EMAIL -->
            <v-text-field
              v-model="email.value.value"
              :error-messages="email.errorMessage.value"
              label="E-mail"
            ></v-text-field>
            <!-- PASSWORD -->
            <v-text-field
              type="password"
              v-model="password.value.value"
              :error-messages="password.errorMessage.value"
              label="Password"
            ></v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="me-4" type="submit"> submit </v-btn>

              <v-btn @click="handleReset"> clear </v-btn>
            </v-card-actions>
          </form>
        </v-card>
      </v-col>
    </v-row></v-container
  >
</template>

<script setup lang="ts">
import { onMounted } from "vue";

// composables import
// import { useRoute } from "vue-router";
import { useAuthStore } from "@/store/auth";
import { useField, useForm } from "vee-validate";
import { useRouter } from "vue-router";
const store = useAuthStore();

// const route = useRoute();
const router = useRouter()
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    password(value:string) {
      return value ? true : "this field is required";
    },
    email(value:string) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
  },
});

const email = useField("email");
const password = useField("password");

const submit = handleSubmit((values) => {
  // alert(JSON.stringify(values, null, 2));
  store.login(values).then(()=>{
router.push('/')
  });
});
onMounted(() => {
  //
});
</script>
