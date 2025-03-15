import { Switch } from '@mui/material';
import PropTypes from 'prop-types';

const Switches = ({
    checked
}) => {
    return (
        <Switch
            checked={checked}
            // onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    )
}

Switches.propTypes = {
    checked: PropTypes.func.isRequired
}
export default Switches