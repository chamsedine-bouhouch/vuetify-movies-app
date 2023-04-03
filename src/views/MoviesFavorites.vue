<template>
  <MoviesList :movies="store.favoriteMovies" />
</template>

<script lang="ts" setup>
import MoviesList from "@/components/MoviesList.vue";
import { onMounted } from "vue";
import { useAppStore } from "@/store/app";
import { useAuthStore } from "@/store/auth";
import { User } from "@/types/user";

const store = useAppStore();
const authStore=useAuthStore()
const user:User=authStore.UserData
onMounted(() => {
  store.FavoritesByUser(user.id);
});
</script>
