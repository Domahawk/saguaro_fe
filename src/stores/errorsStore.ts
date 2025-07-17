import { defineStore } from "pinia";
import {type Ref, ref} from "vue";

export const useErrorsStore = defineStore("errors", () => {
    const errors: Ref<Array<any>|null> = ref([]);

    const setErrors = (setErrors: Array<any>) => {
        errors.value = setErrors;
    }

    const clearErrors = () => {
        errors.value = [];
    }

    const emptyErrors = ():boolean => {
        return errors.value?.length === 0
    }

    return {
        errors,
        setErrors,
        clearErrors,
        emptyErrors,
    };
})