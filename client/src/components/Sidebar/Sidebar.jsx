import Drawer from '@mui/material/Drawer';
import DrawerList from './Drawer';
import PropTypes from 'prop-types';

const Sidebar = ({
    open,
    toggleDrawer,
    role
}) => {

    return (
        <div>
            <Drawer open={open} onClose={() => toggleDrawer(false)}>
                <DrawerList
                    toggleDrawer={toggleDrawer}
                    role={role}
                />
            </Drawer>
        </div>
    )
}

Sidebar.propTypes = {
    open: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    role: PropTypes.string,
};

export default Sidebar