
import { useAppStore } from '@/store/app';
import { useAuthStore } from '@/store/auth';

const store = useAppStore()
const authtore = useAuthStore()


export default function useMovies() {
  function addFavorite(movie) {
    console.log(store.favoriteMmovies.find(movie => movie.imdbID),'txxxt')
    // movie.userId = authtore.UserData.user.id
    // store.addFavorite(movie)
  }
  return {
    addFavorite
  };
}