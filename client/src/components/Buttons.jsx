import PropTypes from "prop-types";

const Buttons = ({
    type = "button",
    children,
    isSubmitting = false,
    onClick,
    className
}) => {
    return (
        <button
            type={type}
            disabled={isSubmitting}
            onClick={onClick}
            className={`font-semibold flex justify-center p-3 rounded-xl ${className}`}>
            {isSubmitting ? <p className="font-semibold text-lg">Please wait...</p> : children}
        </button>
    )
}

Buttons.propTypes = {
    isSubmitting: PropTypes.bool,
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
}

Buttons.defaultProps = {
    type: "button",
    isSubmitting: false
}
export default Buttons