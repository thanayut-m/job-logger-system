import { Route } from "react-router"
import SignIn from "../auth/SignIn"

const PublicRouters = () => {
    return (
        <div>
            <Route index element={<SignIn />} />
        </div>
    )
}
export default PublicRouters