import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
    const token = ref();

    const login = (loginToken: string) => {
        localStorage.setItem("token", loginToken);
        token.value = loginToken;
    }

    const isAuthenticated = () =>  token.value !== null;

    const logout = () => {
        localStorage.removeItem("token");
        token.value = null;
    }

    return {
        token,
        isAuthenticated,
        login,
        logout,
    };
})