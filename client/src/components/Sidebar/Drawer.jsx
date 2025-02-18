import PropTypes from 'prop-types';

const Drawer = ({ children }) => {

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {children}
                </ul>
            </div>
        </div>
    )
}
Drawer.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Drawer