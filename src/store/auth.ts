// Utilities
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import axios from "axios";
const BASE_URl = import.meta.env.VITE_SERVER_BASE_URl;

export const useAuthStore = defineStore("auth", {
  state: () => ({
    UserData: useStorage("UserData", {}),

    RegisterForm: {},
    // LoginForm: {
    //   email: "chams@mail.com",
    //   password: "bestPassw0rd",
    // },
  }),
  getters: {
    isAuthenticated: (state) => Object.keys(state.UserData).length !== 0,
  },
  actions: {
    async login(LoginForm: any) {
      await axios
        .post(`${BASE_URl}/login`, LoginForm)
        .then((response) => {
          this.UserData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
