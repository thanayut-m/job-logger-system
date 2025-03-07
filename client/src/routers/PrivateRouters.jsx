import PropTypes from "prop-types";
import { Routes, Route, useNavigate } from "react-router";
import Dashboard from "../pages/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import PrivateLayouts from "../Layouts/PrivateLayouts";
import ManageUser from "../pages/Admin/Manage_User/Manage_User";

const PrivateRouters = ({
    role,
    fullname
}) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!role) {
            setLoading(true);
            return;
        }
        setLoading(false);

        if (role !== "admin" && role !== "person") {
            navigate("/");
        }
    }, [role, navigate]);

    if (loading) {
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