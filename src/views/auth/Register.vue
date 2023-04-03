<template>
  <v-container>
    <v-row dense>
      <v-col>
        <v-card class="mx-auto my-12 px-6" max-width="600px">
          <v-card-title class="text-center">Register Form</v-card-title>
          <form @submit.prevent="submit">
            <!-- First Name -->
            <v-text-field
              v-model="firstname.value.value"
              :error-messages="firstname.errorMessage.value"
              label="First Name"
            ></v-text-field>
            <!-- Last Name -->
            <v-text-field
              v-model="lastname.value.value"
              :error-messages="lastname.errorMessage.value"
              label="Last Name"
            ></v-text-field>

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
              <router-link
                class="text-decoration-none text-black"
                :to="{ name: 'Login' }"
              >
                <v-btn class="me-4"> Login </v-btn>
              </router-link>
              <v-spacer></v-spacer>
              <v-btn color="primary" class="me-4" type="submit"> submit </v-btn>

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
const router = useRouter();
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    firstname(value) {
      if (value?.length >= 2) return true;

      return "First Name needs to be at least 2 characters.";
    },
    lastname(value) {
      if (value?.length >= 2) return true;

      return "Last Name needs to be at least 2 characters.";
    },
    password(value: string) {
      return value ? true : "this field is required";
    },
    email(value: string) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Must be a valid e-mail.";
    },
  },
});

const firstname = useField("firstname");
const lastname = useField("lastname");
const email = useField("email");
const password = useField("password");

const submit = handleSubmit((values) => {
  store.register(values).then(() => {
    router.push("/");
  });
});
onMounted(() => {
  //
});
</script>
