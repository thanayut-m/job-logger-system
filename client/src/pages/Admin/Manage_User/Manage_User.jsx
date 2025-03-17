import CardDetailManageUser from "./CardDetailManageUser"
import CardTitleManageUser from "./CardTitleManageUser"

const ManageUser = () => {


    const menuItems = [
        { value: "admin", name: "mgr" },
        { value: "person", name: "sa" },
    ];

    return (
        <div className="flex flex-col gap-3">
            <CardTitleManageUser />
            <CardDetailManageUser
                menuItems={menuItems}
            />
        </div>
    )
}
export default ManageUser