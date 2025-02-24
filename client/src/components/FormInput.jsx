import PropTypes from "prop-types";

const FormInput = ({
    register,
    name,
    placeholder,
    type = "text",
    label,
    id,
    errors = {}
}) => {
    return (
        <fieldset >
            <label
                htmlFor={id || name}
                className="text-xs font-bold text-black "
            >
                {label}
            </label>
            <input
                {...register(name)}
                id={id || name}
                type={type}
                placeholder={placeholder}
                className={`${errors[name] ? " input input-error" : "input input-neutral"} bg-white text-black w-full`}
            />
            {
                errors[name] && (<p className="text-red-500 font-bold text-sm -mb-2">{errors[name].message}</p>)
            }
        </fieldset>
    )
}

FormInput.propTypes = {
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    errors: PropTypes.func.isRequired
}
export default FormInput