import { Switch } from '@mui/material';
import PropTypes from 'prop-types';

const Switches = ({
    checked,
    onClick,
    name,
    register
}) => {
    return (
        <Switch
            {...register(name)}
            checked={checked}
            onClick={onClick}
        />
    )
}

Switches.propTypes = {
    checked: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}
export default Switches