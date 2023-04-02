
import { useAppStore } from '@/store/app';
import { useAuthStore } from '@/store/auth';

const store = useAppStore()
const authStore = useAuthStore()


export default function useMovies() {
  function addFavorite(movie) {
    console.log(store.favoriteMovies.find(movie => movie.imdbID),'txxxt')
    movie.userId = authStore.UserData.user.id
    store.addFavorite(movie)
  }
  return {
    addFavorite
  };
}