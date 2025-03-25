import { TextField } from "@mui/material"
import PropTypes from "prop-types";

const Input = ({
    label,
    type,
    register,
    name,
    id,
    defaultValue,
    disabled,
    autocomplete
}) => {
    return (
        <TextField
            {...register(name)}
            id={id || name}
            label={label}
            type={type}
            defaultValue={defaultValue}
            variant="outlined"
            disabled={disabled}
            autocomplete={autocomplete}
        />

    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Input