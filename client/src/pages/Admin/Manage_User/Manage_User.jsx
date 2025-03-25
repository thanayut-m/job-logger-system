import { useState } from "react";
import CardDetailManageUser from "./CardDetailManageUser"
import CardTitleManageUser from "./CardTitleManageUser"

const ManageUser = () => {
    const [openModal, setOpenModal] = useState(null);

    const handleOpen = (modal) => {
        setOpenModal(modal)
    };
    const handleClose = () => {
        setOpenModal(null)
    };


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
            />
            <CardDetailManageUser
                menuItems={menuItems}
            />
        </div>
    )
}
export default ManageUser