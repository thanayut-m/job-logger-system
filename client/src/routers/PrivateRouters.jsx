import PropTypes from "prop-types";
import { Routes, Route } from "react-router";
import ManageUser from "../pages/Admin/Manage-User";
import Dashboard from "../pages/Dashboard/Dashboard";
import { useEffect } from "react";

const PrivateRouters = ({ role }) => {

    useEffect(() => {
        console.log(role);
    }, [role]);


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
PrivateRouters.propTypes = {
    role: PropTypes.string.isRequired,
};

export default PrivateRouters