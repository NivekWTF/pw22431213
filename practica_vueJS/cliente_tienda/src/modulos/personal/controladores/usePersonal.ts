import { ref } from "vue"
import type { Personal } from "../interfaces/personal-interface"
import personalAPI from "../api/personalAPI"

export const usePersonal = () => {
    const personal = ref<Personal[]>([])

    const traePersonal = async () => {
        const respuesta = await personalAPI.get<Personal[]>('/')
        personal.value = respuesta.data
        console.log(personal.value)
    }

    return {
        personal,
        traePersonal
    }
}