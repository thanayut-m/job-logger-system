import DrawerToggle from "./DrawerToggle";
import EmployeeInfo from "./EmployeeInfo"
import Logo from "./Logo"
import SignOut from "./SignOut"


const Navbar = () => {
    return (
        <div className="bg-amber-600 py-2 px-3 flex justify-between items-center shadow-2xl w-full fixed top-0 left-0 z-10">
            <div className="flex gap-4 items-center">
                <DrawerToggle />
                <Logo />
            </div>

            <div className="flex items-center gap-2">
                <EmployeeInfo />
                <SignOut />
            </div>
        </div>

    )
}
export default Navbar