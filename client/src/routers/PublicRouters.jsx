import { Route, Routes } from "react-router";
import SignIn from "../auth/SignIn"
import SignUp from "../auth/SignUp";

const PublicRouters = () => {
    return (
        <div>
            <Routes>
                <Route index element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
            </Routes>
        </div>
    )
}
export default PublicRouters