import PropTypes from "prop-types";

const Buttons = ({
    type = "button",
    text,
    isSubmitting = false
}) => {
    return (
        <button
            type={type}
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-400 p-2 rounded-xl w-full opacity-100">
            {
                isSubmitting
                    ? <p className="font-bold">Please wait...</p>
                    : <p>{text}</p>
            }
        </button>
    )
}

Buttons.propTypes = {
    isSubmitting: PropTypes.bool,
    text: PropTypes.string,
    type: PropTypes.string
}

Buttons.defaultProps = {
    type: "button",
    isSubmitting: false
}
export default Buttons