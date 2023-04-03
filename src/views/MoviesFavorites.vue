<template>
  <MoviesList :movies="store.favoriteMovies" />
</template>

<script lang="ts" setup>
import MoviesList from "@/components/MoviesList.vue";
import { onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { useAuthStore } from "@/store/auth";

const store = useAppStore();
const authStore=useAuthStore()
onMounted(() => {
  store.FavoritesByUser(authStore.UserData.user.id);
});
</script>
