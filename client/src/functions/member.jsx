import axios from "axios";
import { api } from "./Api";
import Swal from "sweetalert2";

const { VITE_API_PATH } = import.meta.env

export const ManageUserInfo = async (
    setManageUserInfo,
    searchValue
) => {
    try {
        const res = await axios.get(VITE_API_PATH + `/Manage_User/searchManageUser`, {
            params: { searchValue: searchValue },
            headers: api.headers()
        })

        console.log("Response data:", res.data);

        if (res.data.message === "success") {
            // console.log("ManageUserInfo" + res.data)
            setManageUserInfo(res.data.result);
        }
    } catch (err) {
        console.error("Error fetching user info:", err);
        setManageUserInfo([]);
    }
}

export const updateUsers = async (
    data,
    handleClose
) => {
    try {
        const res = await axios.put(VITE_API_PATH + `/Manage_User/updateMember`,
            data,
            { headers: api.headers() }
        );
        console.log(res)

        if (res.data.message === 'success') {
            Swal.fire({
                title: "แก้ไขข้อมูลสำเร็จ",
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });
            handleClose();
        }
    } catch (err) {
        console.log("Error : " + err);
        return null;
    }
}