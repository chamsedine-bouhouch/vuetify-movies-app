<template>
  <v-container>
    <v-row dense>
      <v-col
        v-for="movie in movies"
        :key="movie.imdbID"
        cols="12"
        sm="6"
        md="4"
      >
        <MovieItem :movie="movie" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import MovieItem from "./MovieItem.vue";

defineProps(["movies"]);
</script>
