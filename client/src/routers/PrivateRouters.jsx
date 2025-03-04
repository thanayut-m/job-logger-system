import PropTypes from "prop-types";
import { Routes, Route, useNavigate } from "react-router";
import ManageUser from "../pages/Admin/Manage-User";
import Dashboard from "../pages/Dashboard/Dashboard";
import { useEffect } from "react";

const PrivateRouters = ({ role }) => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("User Role:", role);

        if (role !== "admin" && role !== "person") {
            navigate("/");
        }
    }, [role, navigate]);

    if (!role) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Routes>
                {/* admin person */}
                {(role === "admin" || role === "person") && <Route path="dashboard" element={<Dashboard />} />}

                {/* admin */}
                {role === "admin" && <Route path="manage-user" element={<ManageUser />} />}

            </Routes>
        </div>
    )
}
PrivateRouters.propTypes = {
    role: PropTypes.string.isRequired,
};

PrivateRouters.defaultProps = {
    role: "",
}

export default PrivateRouters