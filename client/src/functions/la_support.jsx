import axios from "axios";
import { api } from "./Api";
import Swal from "sweetalert2";

const { VITE_API_PATH } = import.meta.env

export const SupportLaInfo = async (
    setSupportLaInfo,
    searchValue
) => {
    try {
        const res = await axios.get(
            VITE_API_PATH + `/laSupport/supportLaInfo`,
            {
                params: { searchValue: searchValue },
                headers: api.headers
            }
        )

        if (res.data.message === "success") {
            setSupportLaInfo(res.data.result)

        }
    } catch (err) {
        console.error("Error fetching La Support info:", err);
        setSupportLaInfo([]);
    }
}

export const CreateLaSupport = async (
    data,
    handleClose,
    reset,
    setError
) => {
    try {
        console.log(data.la_support_name)
        const res = await axios.post(
            VITE_API_PATH + `/laSupport/createLaSupport`,
            { la_support_name: data.la_support_name },
            { headers: api.headers }
        )

        if (res.data.message === "success") {
            Swal.fire({
                icon: "success",
                title: "สร้างข้อมูลสำเร็จ",
                showConfirmButton: false,
                timer: 1000
            })
            reset();
            handleClose();
        }
    } catch (err) {
        console.error("Error fetching La Support info:", err);
        if (err.response?.data?.error === "La Support is already in use") {
            setError("la_support_name", {
                type: "manual",
                message: "ชื่อนี้มีการใช้งานแล้ว",
            });
        } else {
            console.log("Unknown error:", err.response?.data);
        }
    }
}

export const StatusLaSupport = async (
    data,
    fetchDataLaSupport
) => {
    try {
        console.log(data)
        const res = await axios.put(
            VITE_API_PATH + `/laSupport/updateStatusLaSupport`,
            {
                la_support_id: data.todo_la_Support_id,
                la_support_status: !data.todo_la_Support_status
            },
            { headers: api.headers }
        )

        if (res.data.message === "success") {
            fetchDataLaSupport();
        }
    } catch (err) {
        console.error("Error fetching hospitals info:", err);
    }
}

export const ChangeLaSupport = async (
    data,
    reset,
    handleClose,
    fetchDataLaSupport,
    setError
) => {
    try {
        const res = await axios.put(
            VITE_API_PATH + `/laSupport/updateLaSupport`,
            {
                la_support_id: data.la_support_id,
                la_support_name: data.la_support_name
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
            fetchDataLaSupport();
        }
    } catch (err) {
        console.error("Error fetching hospitals info:", err);

        if (err.response?.data?.error === 'La Support is already in use') {
            setError("la_support_name", {
                type: "manual",
                message: "ชื่อนี้มีการใช้งานแล้ว",
            });
        } else {
            console.log("Unknown error:", err.response?.data);
        }
    }
}
