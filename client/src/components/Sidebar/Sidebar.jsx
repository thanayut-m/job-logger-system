import Drawer from "./Drawer"
import { AiOutlineDashboard } from "react-icons/ai";
import { FaUserCog } from "react-icons/fa";
import SidebarDashboardLink from "./SidebarDashboardLink";

const Sidebar = () => {
    return (
        <div>
            <Drawer>
                <SidebarDashboardLink
                    to="/private/dashboard"
                    Icon={AiOutlineDashboard}
                    textName="Dashboard"
                />
                <SidebarDashboardLink
                    to="/private/manage-user"
                    Icon={FaUserCog}
                    textName="ตั้งค่าผู้ใช้"
                />
            </Drawer>
        </div>

    )
}
export default Sidebar