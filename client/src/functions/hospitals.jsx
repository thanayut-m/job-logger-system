import axios from "axios";
import { api } from "./Api";
import Swal from "sweetalert2";

const { VITE_API_PATH } = import.meta.env

export const HospitalInfo = async (
    setHospitalInfo,
    searchValue,
) => {
    try {
        console.log(searchValue)
        const res = await axios.get(VITE_API_PATH + `/hospitals/hospitalInfo`, {
            params: { searchValue: searchValue },
            headers: api.headers()
        })

        if (res.data.message === "success") {
            setHospitalInfo(res.data.result)
        }
    } catch (err) {
        console.error("Error fetching hospitals info:", err);
        setHospitalInfo([]);
    }
}

export const CreateHospitals = async (
    data,
    reset,
    handleClose,
    fetchDataHospital,
    setError
) => {
    try {
        const res = await axios.post(VITE_API_PATH + `/hospitals/createHospitals`,
            { hospital_name: data.hospital_name },
            { headers: api.headers() }
        )

        if (res.data.message === 'success') {
            console.log("success")
            Swal.fire({
                icon: "success",
                title: "สร้างโรงพยาบาลสำเร็จ",
                showConfirmButton: false,
                timer: 1000
            })
            reset();
            handleClose();
            fetchDataHospital();
        }
    } catch (err) {
        console.error("Error fetching hospitals info:", err);
        if (err.response?.data?.error === 'Hospital is already in use') {
            setError("hospital_name", {
                type: "manual",
                message: "ชื่อโรงพยาบาลนี้มีการใช้งานแล้ว",
            });
        } else {
            console.log("Unknown error:", err.response?.data);
        }
    }
}