import { Button } from "@mui/material"
import PropTypes from "prop-types"

const Buttons = ({
    children,
    variant,
    backgroundColor,
    hoverBackgroundColor,
    onClick,
    disabled,
    type,
    minWidth,
    minHeight
}) => {
    return (
        <Button
            variant={variant}
            onClick={onClick}
            type={type}
            disabled={disabled}
            sx={{
                backgroundColor: backgroundColor,
                color: "white",
                "&:hover": { backgroundColor: hoverBackgroundColor },
                py: 1,
                minWidth: { minWidth },
                minHeight: { minHeight }
            }}

        >
            {children}
        </Button>
    )
}

Buttons.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    backgroundColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    minWidth: PropTypes.string,
    minHeight: PropTypes.string
}

export default Buttons
