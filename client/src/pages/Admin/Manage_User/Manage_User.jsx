import { useEffect, useState } from "react"
import { ManageUserInfo } from "../../../functions/member"
import CardDetailManageUser from "./CardDetailManageUser"
import CardTitleManageUser from "./CardTitleManageUser"

const ManageUser = () => {
    const [manageUserInfo, setManageUserInfo] = useState([]);

    const fetchData = async () => {
        await ManageUserInfo(setManageUserInfo);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col gap-3">
            <CardTitleManageUser />
            <CardDetailManageUser
            manageUserInfo={manageUserInfo}
            />
        </div>
    )
}
export default ManageUser