<template>
  <v-container>
    <v-row dense>
      <v-col v-for="movie in store.movies" :key="movie.Title" cols="6">
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
              <v-card-title
                class="text-white"
                v-text="movie.Title"
              ></v-card-title>
            </v-img>
          </router-link>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              size="small"
              color="surface-variant"
              variant="text"
              icon="mdi-heart"
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
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAppStore } from "@/store/app";

const store = useAppStore();


let searchTitle = ref<string>("Batman");
onMounted(() => {
  store.searchMovies(searchTitle.value);
});
</script>
