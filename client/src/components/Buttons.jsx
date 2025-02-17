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
            className="btn btn-primary w-full">
            {
                isSubmitting
                    ? <span>Please wait...</span>
                    : <span>{text}</span>
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