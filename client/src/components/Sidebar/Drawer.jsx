import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import DrawerList from './DrawerList';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaUserCog } from 'react-icons/fa';

const Drawers = ({
    toggleDrawer,
    role
}) => {
    const menuItems = [
        {
            to: "/private/dashboard",
            Icon: AiOutlineDashboard,
            textName: "Dashboard"
        },
    ];

    if (role === 'admin') {
        menuItems.push(
            {
                to: "/private/manage-user",
                Icon: FaUserCog,
                textName: "ตั้งค่าผู้ใช้"
            },
        );
    }

    return (
        <Box sx={{ width: 300 }} role="presentation" onClick={() => toggleDrawer(false)}>
            {menuItems.map((item, index) => (
                <DrawerList
                    key={index}
                    textName={item.textName}
                    to={item.to}
                    Icon={item.Icon}
                />
            ))}
        </Box>
    );
};

Drawers.propTypes = {
    toggleDrawer: PropTypes.func.isRequired,
    role: PropTypes.string,
};

export default Drawers;
