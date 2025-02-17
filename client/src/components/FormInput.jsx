import PropTypes from "prop-types";

const FormInput = ({
    register,
    name,
    placeholder,
    type = "text",
    textname,
    id,
    errors = {}
}) => {
    return (
        <fieldset className="fieldset">
            <label
                htmlFor={id || name}
                className="text-xs font-bold text-black "
            >
                {textname}
            </label>
            <input
                {...register(name)}
                id={id || name}
                type={type}
                placeholder={placeholder}
                className={`${errors[name] ? " border-red-500" : "input input-neutral"} bg-white text-black w-full`}
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
    textname: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    errors: PropTypes.func.isRequired
}
export default FormInput