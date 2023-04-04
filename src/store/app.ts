// Utilities
import { defineStore } from "pinia";
import axios from "axios";
import { Movie } from "@/types/movie";
const BASE_URl = import.meta.env.VITE_SERVER_BASE_URl;
const Api = import.meta.env.VITE_APP_OMDB_API_KEY;
export const useAppStore = defineStore("app", {
  state: () => ({
    movies: [],
    total: 0,
    searchTitle: "Batman",
    favoriteMovies: [],
    movie: {} as Movie,
  }),
  getters: {},
  actions: {
    // single movie
    async getMovie(title: string | string[]) {
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
    async searchMovies(title: string, page?: number) {
      await axios
        .get(`https://www.omdbapi.com/?s=${title}&page=${page}&apikey=${Api}`)
        .then((response) => {
          this.movies = response.data.Search;
          this.total = response.data.totalResults;
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
    // User favorites
    FavoritesByUser(userId) {
      axios
        .get(`${BASE_URl}/users/${userId}/movies`)
        .then((response) => {
          this.favoriteMovies = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
