import axios from "axios";
import { api } from "./Api";

const { VITE_API_PATH } = import.meta.env

export const HospitalInfo = async (
    setHospitalInfo,
    searchValue
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