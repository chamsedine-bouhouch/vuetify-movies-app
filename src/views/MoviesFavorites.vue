<template>
  <MoviesList :movies="store.favoriteMovies" />
</template>

<script lang="ts" setup>
import MoviesList from "@/components/MoviesList.vue";
import { onMounted } from "vue";
import { useAppStore } from "@/store/app";

const store = useAppStore();

onMounted(() => {
  store.searchMoviesFavorites();
});
</script>
