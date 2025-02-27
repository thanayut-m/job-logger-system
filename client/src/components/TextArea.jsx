import PropTypes from 'prop-types';

const TextArea = ({
    placeholder,
    label,
    register,
    name,
}) => {

    return (
        <div>
            <label htmlFor={name} className="text-sm font-semibold text-black">
                {label}
            </label>
            <textarea
                {...register(name)}
                className="textarea textarea-neutral  w-full"
                placeholder={placeholder}
                rows={3}
            />

        </div>
    )
}

TextArea.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
}
export default TextArea