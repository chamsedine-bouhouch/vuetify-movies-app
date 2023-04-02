<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" sm="8" md="7">
        <v-card class="mx-auto my-12" variant="outlined">
          <v-img cover height="250" :src="movie.Poster"></v-img>

          <v-card-item>
            <v-card-title>{{ movie.Title }}</v-card-title>

            <v-card-subtitle>
              <span class="me-1">{{ movie.Genre }}</span>

              <v-icon
                color="error"
                icon="mdi-fire-circle"
                size="small"
              ></v-icon>
            </v-card-subtitle>
          </v-card-item>

          <v-divider class="mx-4 mb-1"></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-row  class="mx-0">
              <v-rating
                :model-value="movie.imdbRating"
                color="amber"
                density="compact"
                half-increments
                readonly
                size="small"
                :length="10"
              ></v-rating>

              <div class="text-grey ms-4">
                {{ movie.imdbRating }} ({{ movie.imdbVotes }})
              </div>
            </v-row>
            <v-btn
              size="small"
              color="surface-variant"
              variant="text"
              icon="mdi-heart"
              @click="addMovie(store.movie)"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Card Right -->
      <v-col cols="12" sm="8" md="5">
        <div class="mx-auto my-12">
          <v-card-item>
            <div>
              {{ movie.Plot }}
            </div>
            <v-card-text>
              <div class="my-4 text-subtitle-1">
                Country: {{ movie.Country }}
              </div>
              <div class="my-4 text-subtitle-1">
                Released: {{ movie.Released }}
              </div>
              <div class="my-4 text-subtitle-1">
                Language: {{ movie.Language }}
              </div>

              <div class="my-4 text-subtitle-1">List of Actors:</div>

              <li v-for="actor in movie.Actors?.split(',')" :key="actor">
                {{ actor }}
              </li>
            </v-card-text>
          </v-card-item>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useAppStore } from "@/store/app";
import useMovies from "../composables/useMovies";

const { addFavorite } = useMovies();
const store = useAppStore();

const route = useRoute();
const movie = computed(() => store.movie);
// Get Movie Data
onMounted(() => {
  store.getMovie(route.params.title);
});
function addMovie(movie: any) {
  let FormatedMovie = {
    Title: movie.Title,
    Year: movie.Year,
    imdbID: movie.imdbID,
    Type: movie.Type,
    Poster: movie.Poster,
  };
  addFavorite(FormatedMovie);
}
</script>
