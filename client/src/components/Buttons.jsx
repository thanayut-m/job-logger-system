import PropTypes from "prop-types";

const Buttons = ({
    type = "button",
    text,
    isSubmitting = false,
    onClick
}) => {
    return (
        <button
            type={type}
            disabled={isSubmitting}
            onClick={onClick}
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
    type: PropTypes.string,
    onClick: PropTypes.func
}

Buttons.defaultProps = {
    type: "button",
    isSubmitting: false
}
export default Buttons