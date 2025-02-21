import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import DrawerList from './DrawerList';
import { AiOutlineDashboard } from 'react-icons/ai';
import { FaUserCog } from 'react-icons/fa';

const Drawers = ({ toggleDrawer }) => {
    return (
        <Box sx={{ width: 300 }} role="presentation" onClick={() => toggleDrawer(false)}>
            <DrawerList
                textName="to-do-list"
                to="/private/dashboard"
                Icon={AiOutlineDashboard}
            />
            <DrawerList
                textName="ตั้งค่าผู้ใช้"
                to="/private/manage-user"
                Icon={FaUserCog}
            />
        </Box>
    );
};

Drawers.propTypes = {
    toggleDrawer: PropTypes.func.isRequired,
};

export default Drawers;
