<template>
    <MoviesList :movies="store.favoriteMmovies" />
  </template>
  
  <script lang="ts" setup>
  import MoviesList from "@/components/MoviesList.vue";
  import { ref, onMounted } from "vue";
  import { useAppStore } from "@/store/app";
  
  const store = useAppStore();
  
  let searchTitle = ref<string>("Batman");
  onMounted(() => {
    store.searchMoviesFavorites(searchTitle.value);
  });
  </script>
  