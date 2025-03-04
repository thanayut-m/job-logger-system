import axios from "axios";

const { VITE_API_PATH } = import.meta.env

export const signUp = async (data, navigate) => {
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        await axios.post(VITE_API_PATH + "/auth/signUp", data)

        navigate("/");

    } catch (err) {
        console.log(err.response.data)
    }

}