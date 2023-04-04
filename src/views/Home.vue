<template>
  <MoviesList :movies="store.movies" />
  <Pagination />
</template>

<script lang="ts" setup>
import MoviesList from "@/components/MoviesList.vue";
import Pagination from "@/components/Pagination.vue";
import { useAppStore } from "@/store/app";
import { onMounted } from "vue";

const store = useAppStore();

onMounted(() => {
  store.searchMovies(store.searchTitle);
});
</script>
