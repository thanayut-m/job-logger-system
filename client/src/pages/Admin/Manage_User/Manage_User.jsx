import { useCallback, useEffect, useState } from "react";
import CardDetailManageUser from "./CardDetailManageUser"
import CardTitleManageUser from "./CardTitleManageUser"
import { ManageUserInfo } from "../../../functions/member";
import { useForm } from "react-hook-form";

const ManageUser = (
    userID
) => {
    const { register, watch } = useForm();
    const searchValue = watch("searchManage", "");
    const [openModal, setOpenModal] = useState(null);
    const [manageUserInfo, setManageUserInfo] = useState([]);


    const handleOpen = (modal) => {
        setOpenModal(modal)
    };
    const handleClose = () => {
        setOpenModal(null)
    };

    const fetchData = useCallback(async () => {
        if (!searchValue.trim()) {
            ManageUserInfo(setManageUserInfo, "");
        } else {
            ManageUserInfo(setManageUserInfo, searchValue)
        }

    }, [searchValue]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    const menuItems = [
        { value: "admin", name: "mgr" },
        { value: "person", name: "sa" },
    ];

    return (
        <div className="flex flex-col gap-3">
            <CardTitleManageUser
                openModal={openModal}
                handleOpen={handleOpen}
                handleClose={handleClose}
                menuItems={menuItems}
                fetchData={fetchData}
                register={register}
                watch={watch}
            />
            <CardDetailManageUser
                fetchData={fetchData}
                menuItems={menuItems}
                manageUserInfo={manageUserInfo}
                userID={userID}
            />
        </div>
    )
}
export default ManageUser