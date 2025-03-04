import { Routes, Route } from "react-router";
import PublicRouters from "./publicRouters"

import PrivateRouters from "./PrivateRouters";
import { currenUser } from "../functions/Auth";
import { useState } from "react";

const AppRouters = () => {
    const [role, setRole] = useState("person");

    // useEffect(() => {

    // }, []);
    const idToken = localStorage.getItem(import.meta.env.VITE_SET_TOKEN);

    if (idToken) {
        currenUser(idToken).then(res => {
            if (res) {
                // console.log(res.data.role);
                setRole(res.data.role);
            }
        });
    }


    return (
        <>
            <Routes>
                {/* Public Page */}
                <Route path="/*" element={<PublicRouters />} />

                {/* Private Page */}
                <Route path="/private/*" element={<PrivateRouters
                    role={role}
                />}
                />

            </Routes>
        </>
    )
}
export default AppRouters