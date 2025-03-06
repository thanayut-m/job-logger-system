import PropTypes from "prop-types";
import { Routes, Route, useNavigate } from "react-router";
import ManageUser from "../pages/Admin/Manage-User";
import Dashboard from "../pages/Dashboard/Dashboard";
import { useEffect } from "react";
import PrivateLayouts from "../Layouts/PrivateLayouts";

const PrivateRouters = ({
    role,
    fullname
}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (role !== "admin" && role !== "person") {
            navigate("/");
        }
    }, [role, navigate]);

    if (!role) {
        return <p>Loading...</p>;
    }

    return (
        <PrivateLayouts
            fullname={fullname}
            role={role}
        >
            <Routes>
                {/* admin person */}
                {(role === "admin" || role === "person") && <Route path="dashboard" element={<Dashboard />} />}

                {/* admin */}
                {role === "admin" && <Route path="manage-user" element={<ManageUser />} />}

            </Routes>
        </PrivateLayouts>
    )
}
PrivateRouters.propTypes = {
    role: PropTypes.string,
    fullname: PropTypes.string,
};

PrivateRouters.defaultProps = {
    role: null,
}

export default PrivateRouters