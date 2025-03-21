import axios from "axios";
import Swal from 'sweetalert2'

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
        // await new Promise((resolve) => setTimeout(resolve, 1000))

        const result = await axios.post(VITE_API_PATH + "/auth/signIn", data);
        const message = result.data.message

        if (message === "signIn Success.") {
            localStorage.setItem(VITE_SET_TOKEN, result.data.token)

            await Swal.fire({
                title: "เข้าสู่ระบบสำเร็จ",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            })

            navigate("private/dashboard")
        }
    } catch (err) {
        console.log(err)
    }

}

export const currenUser = async (isToken) => {
    try {
        // console.log("Token" + isToken);
        const res = await axios.get(VITE_API_PATH + "/auth/current-user", {
            headers: {
                Authorization: "Bearer " + isToken,
            }
        })
        // console.log(res.data);
        return res.data
    } catch (err) {
        console.log(err);
    }

}

export const signOut = async (navigate) => {
    try {
        const isToken = localStorage.getItem(VITE_SET_TOKEN)
        if (!isToken) {
            console.log("No token found in localStorage, redirecting...")
            navigate("/")
        } else {
            await Swal.fire({
                icon: "warning",
                title: "ยืนยันออกจากระบบ",
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: "ตกลง",
                cancelButtonText: "ยกเลิก"
            }).then((result) => {
                if (result.isConfirmed) {
                    // console.log("remove Token:" + isToken)
                    localStorage.removeItem(VITE_SET_TOKEN)
                    Swal.fire({
                        title: "ออกจากระบบ",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1000
                    });

                    navigate("/");
                }
            })
        }
    } catch (err) {
        console.log(err);
    }
}