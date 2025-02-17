import PropTypes from "prop-types";

const FormInput = ({
    register,
    name,
    placeholder,
    type,
    textname,
    id
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
                className="input input-neutral bg-white text-black w-full"
            />
        </fieldset>
    )
}

FormInput.propTypes = {
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    textname: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
export default FormInput