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
        @click="addFavorite(movie)"
      ></v-btn>

      <!-- <v-btn
              size="small"
              color="surface-variant"
              variant="text"
              icon="mdi-bookmark"
            ></v-btn>

            <v-btn
              size="small"
              color="surface-variant"
              variant="text"
              icon="mdi-share-variant"
            ></v-btn> -->
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/app';
import { useAuthStore } from '@/store/auth';

defineProps(["movie"]);
import { ref } from "vue";

const store=useAppStore()
const authtore=useAuthStore()

// import { Movie } from '../types/movie';
const favoriteMovie = ref<any>([]);
function addFavorite(movie:any) {

movie.userId=authtore.UserData.user.id
  favoriteMovie.value.push(movie );
  console.table(favoriteMovie.value);
  store.addFavorite(movie)

}
</script>
