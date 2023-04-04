<template>
  <v-pagination
    v-model="page"
    :length="pages"
    prev-icon="mdi-menu-left"
    next-icon="mdi-menu-right"
    :total-visible="7"
  ></v-pagination>
</template>
<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useAuthStore } from "@/store/auth";
import { useAppStore } from "@/store/app";
import { useRoute } from "vue-router";
import { User } from "@/types/user";

const authStore = useAuthStore();
const store = useAppStore();

const route = useRoute();

const user: User = authStore.UserData;

const page = ref(1);

const pages = computed(() =>
  route.name === "Movies Favorites"
    ? store.favoriteMovies.length % 10
    : store.total % 10
);

watch(page, async (newValue) => {
  if (route.name === "Movies Favorites") {
    console.log("Movies Favorites");
    store.FavoritesByUser(user.id);
  } else {
    store.searchMovies(store.searchTitle, newValue);
  }
});
</script>
