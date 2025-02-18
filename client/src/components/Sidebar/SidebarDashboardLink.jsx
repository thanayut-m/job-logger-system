import { Link } from "react-router"
import PropTypes from 'prop-types';

const SidebarDashboardLink = ({
    textName,
    to,
    Icon
}) => {
    return (
        <li>
            <Link to={to}>
                <Icon className="text-xl" />
                <a className="text-lg py-3">
                    {textName}
                </a>
            </Link>
        </li>
    )
}

SidebarDashboardLink.propTypes = {
    textName: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired

}
export default SidebarDashboardLink