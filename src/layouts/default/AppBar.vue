<template>
  <!-- <v-app-bar flat>
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      Essentials Preset
    </v-app-bar-title>
  </v-app-bar> -->
  <v-app-bar :elevation="2">
    <router-link class="text-decoration-none" :to="{ name: 'Home' }">
      <v-app-bar-title class="text-black">
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
      <v-btn icon="mdi-heart"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useAppStore } from "@/store/app";
import { useRoute } from "vue-router";

const store = useAppStore();
const route = useRoute();

const homePage = computed(() => route.name === "Home");

let searchTitle = ref<string>("");

let searchBoxClosed = ref(true);
function onSearch() {
  console.log("search");
  store.searchMovies(searchTitle.value);
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
