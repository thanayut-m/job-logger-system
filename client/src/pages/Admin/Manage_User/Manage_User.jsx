import { useEffect, useState } from "react"
import { ManageUserInfo } from "../../../functions/member"
import CardDetailManageUser from "./CardDetailManageUser"
import CardTitleManageUser from "./CardTitleManageUser"
import { useForm } from "react-hook-form"

const ManageUser = () => {
    const [manageUserInfo, setManageUserInfo] = useState([]);
    const { register, handleSubmit } = useForm();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const fetchData = async () => {
        ManageUserInfo(setManageUserInfo);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const menuItems = [
        { value: "admin", name: "mgr" },
        { value: "person", name: "sa" },

    ];

    const handleSaveManageUsers = (data) => {
        console.log(data)

    }


    return (
        <div className="flex flex-col gap-3">
            <CardTitleManageUser />
            <CardDetailManageUser
                manageUserInfo={manageUserInfo}
                totalRows={manageUserInfo.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                menuItems={menuItems}
                handleSaveManageUsers={handleSaveManageUsers}
                register={register}
                onClick={handleSubmit(handleSaveManageUsers)}
            />
        </div>
    )
}
export default ManageUser