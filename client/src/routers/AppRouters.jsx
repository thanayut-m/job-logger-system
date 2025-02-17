import { Routes, Route } from "react-router";
import PublicRouters from "./publicRouters"

import PrivateRouters from "./PrivateRouters";

const AppRouters = () => {
    return (
        <>
            <Routes>
                {/* Public Page */}
                <Route path="/*" element={<PublicRouters />} />

                {/* Private Page */}
                <Route path="/private/*" element={<PrivateRouters />} />

            </Routes>
        </>
    )
}
export default AppRouters