import PropTypes from 'prop-types';

const TextArea = ({ placeholder }) => {

    return (
        <textarea
            className="textarea w-full"
            placeholder={placeholder}
            rows={5}
        />
    )
}

TextArea.propTypes = {
    placeholder: PropTypes.string.isRequired
}
export default TextArea