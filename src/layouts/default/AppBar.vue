<template>
  <v-app-bar :elevation="2">
    <router-link class="text-decoration-none" :to="{ name: 'Home' }">
      <v-app-bar-title class="text-black ml-4">
        <v-icon icon="mdi mdi-movie-open-play" />
        Movies Ninja
      </v-app-bar-title>
    </router-link>

    <v-spacer></v-spacer>

    <v-text-field
      v-if="homePage"
      v-model.trim="searchTitle"
      dense
      filled
      rounded
      clearable
      placeholder="Search"
      prepend-inner-icon="mdi-magnify"
      class="pt-6 shrink expanding-search"
      :class="{ closed: searchBoxClosed && !searchTitle }"
      @keyup.enter="onSearch"
      @focus="searchBoxClosed = false"
      @blur="searchBoxClosed = true"
    ></v-text-field>

    <template v-slot:append>
      <router-link
        class="text-decoration-none text-black"
        :to="{ name: 'Movies Favorites' }"
      >
        <v-btn icon="mdi-heart"></v-btn>
      </router-link>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
        </template>
        <v-list>
          <v-list-item v-if="authstore.isAuthenticated" @click="logout()">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
          <v-list-item v-else>
            <v-list-item-title>
              <router-link
                class="text-decoration-none text-black"
                :to="{ name: 'Login' }"
                >Login</router-link
              >
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth";
import { useAppStore } from "@/store/app";
import { ref, computed } from "vue";
// Store
const store = useAppStore();
const authstore = useAuthStore();
// Routes
const route = useRoute();
const router = useRouter();

const homePage = computed(() => route.name === "Home");

let searchTitle = ref<string>("");

let searchBoxClosed = ref(true);

function onSearch() {
  store.searchTitle = searchTitle.value;
  store.searchMovies(searchTitle.value);
}
//
function logout() {
  authstore.UserData = {};
  authstore.accessToken = {};
  router.push("/login");
}
</script>

<style>
.v-input.expanding-search {
  transition: max-width 0.5s;
}
.v-input.expanding-search.closed {
  max-width: 70px;
}
</style>
