// Utilities
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import axios from "axios";
const BASE_URl = import.meta.env.VITE_SERVER_BASE_URl;

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: useStorage("accessToken", {}),
    UserData: useStorage("UserData", {}),
  }),
  getters: {
    isAuthenticated: (state) => Object.keys(state.UserData).length !== 0,
  },
  actions: {
    async login(LoginForm: any) {
      await axios
        .post(`${BASE_URl}/login`, LoginForm)
        .then((response) => {
          this.UserData = response.data.user;
          this.accessToken = response.data.accessToken;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async register(RegisterForm: any) {
      await axios
        .post(`${BASE_URl}/register`, RegisterForm)
        .then((response) => {
          console.log(response)
          this.UserData = response.data.user;
          this.accessToken = response.data.accessToken;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
