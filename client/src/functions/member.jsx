import axios from "axios";
import { api } from "./Api";

const { VITE_API_PATH } = import.meta.env

export const ManageUserInfo = async (
    setManageUserInfo,
) => {
    try {
        const res = await axios.get(VITE_API_PATH + `/Manage_User/memberInfo`, api.headers())

        if (res.data.message === "success") {
            // console.log("ManageUserInfo" + res.data)
            setManageUserInfo(res.data.result);
        }

    } catch (err) {
        console.log("Error : " + err);
        return null;
    }
}