import { useEffect, useState } from "react"
import { ManageUserInfo } from "../../../functions/member"
import CardDetailManageUser from "./CardDetailManageUser"
import CardTitleManageUser from "./CardTitleManageUser"

const ManageUser = () => {
    const [manageUserInfo, setManageUserInfo] = useState([]);
    const [totalRows, setTotalRows] = useState(3);
    const [perPage, setPerPage] = useState(10);
    const [currentPage] = useState(1);


    const fetchData = async (page, limit) => {
        await ManageUserInfo(setManageUserInfo, page, limit, setTotalRows);
    };

    useEffect(() => {
        fetchData(currentPage, perPage);
    }, [currentPage, perPage]);

    const handlePageChange = page => {
        fetchData(page, perPage)
    }

    const handlePerRowsChange = async (newPerPage, page) => {
        setPerPage(newPerPage);
        fetchData(page, newPerPage)
    }

    return (
        <div className="flex flex-col gap-3">
            <CardTitleManageUser />
            <CardDetailManageUser
                manageUserInfo={manageUserInfo}
                totalRows={totalRows}
                handlePageChange={handlePageChange}
                handlePerRowsChange={handlePerRowsChange}
            />
        </div>
    )
}
export default ManageUser