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
    errors = {}
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
            autoComplete="new-password"
            error={!!errors[name]}
            helperText={errors[name]?.message || ""}
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
    errors: PropTypes.object,
};

export default Input