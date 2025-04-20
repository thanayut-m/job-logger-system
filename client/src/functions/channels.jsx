import axios from "axios";
import { api } from "./Api";
import Swal from "sweetalert2";

const { VITE_API_PATH } = import.meta.env

export const ChannelInfo = async (
    setChannelInfo,
    searchValue,
) => {
    const res = await axios.get(
        VITE_API_PATH + `/channels/channelInfo`, {
        params: { searchValue: searchValue },
        headers: api.headers
    })

    if (res.data.message === "success") {
        setChannelInfo(res.data.result)
    }
}
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

export const ChangeChannel = async (
    data,
    reset,
    handleClose,
    fetchDataChannel,
    setError
) => {
    try {
        console.log(data)
        const res = await axios.put(
            VITE_API_PATH + `/channels/updateChannel`,
            {
                channel_id: data.channel_id,
                channel_name: data.channel_name
            },
            { headers: api.headers() }
        )

        if (res.data.message === "success") {
            Swal.fire({
                icon: "success",
                title: "แก้ไขสำเร็จ",
                showConfirmButton: false,
                timer: 1000
            })
            reset();
            handleClose();
            fetchDataChannel();
        }
    } catch (err) {
        console.error("Error fetching hospitals info:", err);

        if (err.response?.data?.error === 'Channel is already in use') {
            setError("channel_name", {
                type: "manual",
                message: "ชื่อนี้มีการใช้งานแล้ว",
            });
        } else {
            console.log("Unknown error:", err.response?.data);
        }
    }
}

export const HandleStatusChannel = async (
    data,
    fetchDataChannel
) => {
    console.log(data)
    try {
        const res = await axios.put(
            VITE_API_PATH + `/channels/updateStatusChannel`,
            {
                Channel_id: data.todo_Channels_id,
                Channel_status: !data.todo_Channels_status
            },
            { headers: api.headers }
        )

        if (res.data.message === "success") {
            fetchDataChannel();
        }
    } catch (err) {
        console.error("Error fetching hospitals info:", err);
    }
}