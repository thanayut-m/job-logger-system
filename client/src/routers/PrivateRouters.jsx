import { Routes, Route } from "react-router";

const PrivateRouters = () => {
    return (
        <div>
            <Routes>
                {/* admin person */}
                <Route path="dashboard" element="dashboard" />

                {/* admin */}
                <Route path="manage-user" element="manage-user" />
            </Routes>
        </div>
    )
}
export default PrivateRouters