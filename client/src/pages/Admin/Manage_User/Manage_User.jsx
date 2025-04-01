import { useEffect, useState } from "react";
import CardDetailManageUser from "./CardDetailManageUser"
import CardTitleManageUser from "./CardTitleManageUser"
import { ManageUserInfo } from "../../../functions/member";

const ManageUser = () => {
    const [openModal, setOpenModal] = useState(null);
    const [manageUserInfo, setManageUserInfo] = useState([]);

    const handleOpen = (modal) => {
        setOpenModal(modal)
    };
    const handleClose = () => {
        setOpenModal(null)
    };

    const fetchData = async () => {
        ManageUserInfo(setManageUserInfo);
    };

    useEffect(() => {
        fetchData();
    }, []);


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
            />
            <CardDetailManageUser
                menuItems={menuItems}
                manageUserInfo={manageUserInfo}
            />
        </div>
    )
}
export default ManageUser