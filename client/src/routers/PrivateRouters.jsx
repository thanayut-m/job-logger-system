import { Routes, Route } from "react-router";
import Dashboard from "../pages/Dashboard";
import ManageUser from "../pages/Admin/Manage-User";

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