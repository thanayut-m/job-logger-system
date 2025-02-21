import { GiHamburgerMenu } from 'react-icons/gi';
import PropTypes from 'prop-types';

const DrawerToggle = ({ toggleDrawer }) => {
    return <GiHamburgerMenu onClick={() => toggleDrawer(true)} />;
};

DrawerToggle.propTypes = {
    toggleDrawer: PropTypes.func.isRequired,
};

export default DrawerToggle;
