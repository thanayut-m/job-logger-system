import { Route, Routes } from "react-router"
import PublicRouters from "./publicRouters"
// import PersonRouters from "./PersonRouters"

// import AdminRouters from "./AdminRouters"

const AppRouters = () => {
    return (
        <>
            AppRouters
            <Routes>
                {/* Public Page */}
                <Route path="/*" element={<PublicRouters />} />

                {/* Private Page */}
                {/* <Route path="/private"> */}

                {/* Router User */}
                {/* <Route path="" element={<PersonRouters />} /> */}

                {/* Router Admin */}
                {/* <Route path="" element={<AdminRouters />} /> */}
                {/* </Route> */}

            </Routes>
        </>
    )
}
export default AppRouters