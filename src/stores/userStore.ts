import { defineStore } from "pinia";
import {type Ref, ref} from "vue";
import type { User } from "@/types/user.ts";

export const useUserStore = defineStore("user", () => {
    const token = ref();
    const user: Ref<User | undefined> = ref();

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
        user,
        isAuthenticated,
        login,
        logout,
    };
})