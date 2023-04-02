// Utilities
import { defineStore } from "pinia";
import axios from "axios";

const Api=import.meta.env.VITE_APP_OMDB_API_KEY
export const useAppStore = defineStore("app", {
  state: () => ({
    movies: [],
    movie: {},
  }),
  getters: {
    getPath: () => import.meta.env,
  },
  // axios.get('https://www.omdbapi.com/?i=tt3896198&apikey=db5b718d')
  actions: {
   async getMovie(title:string) {
      
    await  axios
        .get(`https://www.omdbapi.com/?t=${title}&apikey=${Api}`)
        .then((response) => {
          this.movie = response.data;
        });
    },
    searchMovies(title: string) {
      axios
        .get(`https://www.omdbapi.com/?s=${title}&apikey=${Api}`)
        .then((response) => {
          this.movies = response.data.Search;
        });
    },
  },
});
