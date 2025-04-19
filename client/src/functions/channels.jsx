import axios from "axios";
import { api } from "./Api";
import Swal from "sweetalert2";

const { VITE_API_PATH } = import.meta.env

export const CreateChannel = async (
    data,
    reset,
    handleClose,
    setError
) => {
    try {
        const res = await axios.post(
            VITE_API_PATH + `/channels/createChannels`,
            {
                Channel_name: data.channel_name,
            },
            { headers: api.headers }
        )

        if (res.data.message === "success") {
            Swal.fire({
                icon: "success",
                title: "สร้างสำเร็จ",
                showConfirmButton: false,
                timer: 1000
            })
            reset();
            handleClose();
        }
        console.log(res)
    } catch (err) {
        console.error("Error fetching hospitals info:", err);
        if (err.response?.data?.error === 'Channel is already in use') {
            setError("channel_name", {
                type: "manual",
                message: "มีการใช้งานแล้ว",
            });
        } else {
            console.log("Unknown error:", err.response?.data);
        }
    }
}