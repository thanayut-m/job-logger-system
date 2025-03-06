import { useNavigate } from 'react-router';
import { signOut } from "../../functions/Auth";
import DrawerToggle from "./DrawerToggle";
import EmployeeInfo from "./EmployeeInfo"
import Logo from "./Logo"
import SignOut from "./SignOut"
import PropTypes from 'prop-types';

const Navbar = ({
    toggleDrawer,
    fullname,
    role
}) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(navigate);
    }

    return (
        <div className="bg-amber-600 py-2 px-3 flex justify-between items-center shadow-2xl w-full">
            <div className="flex gap-4 items-center">
                <DrawerToggle toggleDrawer={toggleDrawer} />
                <Logo />
            </div>

            <div className="flex items-center gap-2">
                <EmployeeInfo
                    fullname={fullname}
                    role={role}
                />
                <SignOut
                    onClick={handleSignOut}
                />
            </div>
        </div>

    )
}

Navbar.propTypes = {
    toggleDrawer: PropTypes.func.isRequired,
    fullname: PropTypes.string.isRequired,
    role: PropTypes.string,
}

Navbar.defaultProps = {
    role: null,
}

export default Navbar