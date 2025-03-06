
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from './../components/Sidebar/Sidebar';
import { useState } from 'react';

const PrivateLayouts = ({
    children,
    fullname,
    role
}) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => {
        setOpen(newOpen);
    };

    return (
        <div>
            <Navbar
                toggleDrawer={toggleDrawer}
                fullname={fullname}
                role={role}
            />
            <Sidebar
                open={open}
                toggleDrawer={toggleDrawer}
                role={role}
            />
            <main className='bg-amber-100 px-4 py-4 h-screen'>
                {children}
            </main>
        </div>
    )
}

PrivateLayouts.propTypes = {
    children: PropTypes.node.isRequired,
    fullname: PropTypes.string.isRequired,
    role: PropTypes.string,
}

PrivateLayouts.defaultProps = {
    role: null,
}

export default PrivateLayouts