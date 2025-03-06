import { CiLogout } from "react-icons/ci";
import PropTypes from 'prop-types';

const SignOut = ({ onClick }) => {
    return (
        <div>
            <CiLogout
                onClick={onClick}
                className="text-3xl cursor-pointer" />
        </div>
    )
}

SignOut.propTypes = {
    onClick: PropTypes.func
}

export default SignOut