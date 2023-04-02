
import { useAppStore } from '@/store/app';
import { useAuthStore } from '@/store/auth';

const store = useAppStore()
const authStore = useAuthStore()


export default function useMovies() {
  function addFavorite(movie) {
    movie.userId = authStore.UserData.user.id
    store.addFavorite(movie)
  }
  return {
    addFavorite
  };
}