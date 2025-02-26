import PropTypes from 'prop-types';

const TextArea = ({ placeholder, label }) => {

    return (
        <div>
            <label className="text-sm font-semibold text-black">
                {label}
            </label>
            <textarea
                className="textarea w-full"
                placeholder={placeholder}
                rows={5}
            />
        </div>
    )
}

TextArea.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}
export default TextArea