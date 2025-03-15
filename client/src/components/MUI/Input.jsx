import { TextField } from "@mui/material"
import PropTypes from "prop-types";

const Input = ({
    label,
    type,
    register,
    name,
    id
}) => {
    return (
        <TextField
            {...register(name)}
            id={id || name}
            label={label}
            type={type}
            variant="outlined" />
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
};

export default Input