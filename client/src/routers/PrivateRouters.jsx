import { Routes, Route } from "react-router";
import Dashboard from "../pages/Dashboard";

const PrivateRouters = () => {
    return (
        <div>
            <Routes>
                {/* admin person */}
                <Route path="dashboard" element={<Dashboard />} />

                {/* admin */}
                <Route path="manage-user" element="manage-user" />
            </Routes>
        </div>
    )
}
export default PrivateRouters