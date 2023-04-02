// Utilities
import { defineStore } from "pinia";
import axios from "axios";
const BASE_URl = import.meta.env.VITE_SERVER_BASE_URl;
const Api = import.meta.env.VITE_APP_OMDB_API_KEY;
export const useAppStore = defineStore("app", {
  state: () => ({
    movies: [],
    favoriteMmovies: [],
    movie: {},
  }),
  getters: {
    getPath: () => import.meta.env,
  },
  actions: {
    // single movie
    async getMovie(title: string) {
      await axios
        .get(`https://www.omdbapi.com/?t=${title}&apikey=${Api}`)
        .then((response) => {
          this.movie = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // search
    async searchMovies(title: string) {
      await axios
        .get(`https://www.omdbapi.com/?s=${title}&apikey=${Api}`)
        .then((response) => {
          this.movies = response.data.Search;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // add favorite
    addFavorite(movie: any) {
      axios.post(`${BASE_URl}/movies`, movie).catch((error) => {
        console.log(error);
      });
    },
    searchMoviesFavorites() {
      axios
        .get(`${BASE_URl}/movies`)
        .then((response) => {
          this.favoriteMmovies = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
