
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from './../components/Sidebar/Sidebar';

const PrivateLayouts = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <main className='bg-amber-100 px-4 py-4'>
                {children}
            </main>
        </div>
    )
}

PrivateLayouts.propTypes = {
    children: PropTypes.node.isRequired,
}
export default PrivateLayouts