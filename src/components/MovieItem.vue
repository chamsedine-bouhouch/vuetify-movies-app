<template>
  <v-card>
    <router-link
      class="text-decoration-none"
      :to="{ name: 'MovieDetail', params: { title: movie.Title } }"
    >
      <v-img
        :src="movie.Poster"
        class="align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="200px"
        cover
      >
        <v-card-title class="text-white" v-text="movie.Title"></v-card-title>
      </v-img>
    </router-link>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        size="small"
        color="surface-variant"
        variant="text"
        icon="mdi-heart"
        @click="addMovie(movie)"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
defineProps(["movie"]);
// composables
import useMovies from "../composables/useMovies";

const { addFavorite } = useMovies();

function addMovie(movie: any) {
  addFavorite(movie);
}
</script>
