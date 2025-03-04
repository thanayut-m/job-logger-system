import axios from "axios";

const { VITE_API_PATH, VITE_SET_TOKEN } = import.meta.env

export const signUp = async (data, navigate) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        await axios.post(VITE_API_PATH + "/auth/signUp", data)

        navigate("/");

    } catch (err) {
        console.log(err.response.data)
    }

}

export const signIn = async (data, navigate) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const result = await axios.post(VITE_API_PATH + "/auth/signIn", data);
        const message = result.data.message

        if (message === "signIn Success.") {
            localStorage.setItem(VITE_SET_TOKEN, result.data.token)
            navigate("private/dashboard")
        }
    } catch (err) {
        console.log(err)
    }

}