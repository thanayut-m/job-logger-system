import { Routes, Route } from "react-router";
import ManageUser from "../pages/Admin/Manage-User";
import Dashboard from "../pages/Dashboard/Dashboard";

const PrivateRouters = () => {
    return (
        <div>
            <Routes>
                {/* admin person */}
                <Route path="dashboard" element={<Dashboard />} />

                {/* admin */}
                <Route path="manage-user" element={<ManageUser />} />
            </Routes>
        </div>
    )
}
export default PrivateRouters