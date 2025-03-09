import axios from "axios";
import { api } from "./Api";

const { VITE_API_PATH } = import.meta.env

export const ManageUserInfo = async (
    setManageUserInfo,
    page,
    limit,
    setTotalRows
) => {
    try {
        const res = await axios.post(VITE_API_PATH + `/Manage_User/memberInfoPage`, {
            page,
            limit
        }, api.headers())

        if (res.data.message === "success") {
            setManageUserInfo(res.data.result);
            setTotalRows(res.data.totalRecords);
        }

    } catch (err) {
        console.log("Error : " + err);
        return null;
    }
}