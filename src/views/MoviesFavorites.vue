<template>
  <MoviesList :movies="store.favoriteMovies" />
  <Pagination />
</template>

<script lang="ts" setup>
import MoviesList from "@/components/MoviesList.vue";
import Pagination from "@/components/Pagination.vue";
import { useAuthStore } from "@/store/auth";
import { useAppStore } from "@/store/app";
import { User } from "@/types/user";
import { onMounted } from "vue";

const store = useAppStore();
const authStore = useAuthStore();

const user: User = authStore.UserData;

onMounted(() => {
  store.FavoritesByUser(user.id);
});
</script>
