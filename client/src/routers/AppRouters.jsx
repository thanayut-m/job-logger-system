import { Routes, Route, useLocation } from "react-router";
import PublicRouters from "./publicRouters"
import PrivateRouters from "./PrivateRouters";
import { currenUser } from "../functions/Auth";
import { useEffect, useState } from "react";

const AppRouters = () => {
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(true);
    const [fullName, setFullName] = useState("")


    const location = useLocation();

    const fetchUserRole = async () => {
        const idToken = localStorage.getItem(import.meta.env.VITE_SET_TOKEN);
        // console.log("idToken :" + idToken)

        if (!idToken) {
            setRole("");
            setLoading(false);
            return
        }

        try {
            const res = await currenUser(idToken);
            if (res?.data) {
                // console.log("Role จาก API:", res?.data?.role);
                setRole(res?.data?.role ?? "");
                const fullName = res?.data?.first_name + " " + res?.data?.last_name;
                setFullName(fullName);
                // console.log("AppRouters : " + fullName)
            }

        } catch (err) {
            console.error("Token Invalid:", err);
            setRole("");
            localStorage.removeItem(import.meta.env.VITE_SET_TOKEN);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchUserRole();
    }, [location.pathname]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Routes>
                {/* Public Page */}
                <Route path="/*" element={<PublicRouters />} />

                {/* Private Page */}
                <Route
                    path="/private/*"
                    element={<PrivateRouters
                        role={role}
                        fullname={fullName}
                    />}
                />

            </Routes>
        </>
    )
}
export default AppRouters