import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import DrawerList from './DrawerList';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaUserCog } from 'react-icons/fa';
import SettingsIcon from '@mui/icons-material/Settings';

const Drawers = ({
    toggleDrawer,
    role
}) => {
    const navigation = [
        {
            to: "/private/dashboard",
            Icon: AiOutlineDashboard,
            textName: "Dashboard"
        },
    ];

    if (role === 'admin') {
        navigation.push(
            {
                Icon: SettingsIcon,
                textName: "ตั้งค่าระบบ",
                children: [
                    {
                        to: "/private/manage-user",
                        Icon: FaUserCog,
                        textName: "ผู้ใช้ทั้งหมด"
                    },
                ]
            },
        );
    }

    return (
        <Box sx={{ width: 300 }} role="presentation">
            {navigation.map((item, index) => (
                <DrawerList
                    key={index}
                    {...item}
                    toggleDrawer={toggleDrawer}
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
