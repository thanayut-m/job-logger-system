import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import DrawerList from './DrawerList';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaUserCog } from 'react-icons/fa';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';


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
        {
            Icon: BarChartIcon,
            textName: "Report",
            children: [
                {
                    to: "/private/Report",
                    Icon: DescriptionIcon,
                    textName: "รายงานปัญหา"
                }
            ]
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
                    {
                        to: "/private/hospital",
                        Icon: LocalHospitalIcon,
                        textName: "โรงพยาบาล"
                    },
                    {
                        to: "/private/channel",
                        Icon: PhonelinkSetupIcon,
                        textName: "ช่องทางการติดต่อ"
                    },
                    {
                        to: "/private/la-Support",
                        Icon: InventorySharpIcon,
                        textName: "LA Support"
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
