import { Button } from "@mui/material"
import PropTypes from "prop-types"

const Buttons = ({
    children,
    variant,
    backgroundColor,
    hoverBackgroundColor,
    onClick,
}) => {
    return (
        <Button
            onClick={onClick}
            variant={variant}
            sx={{
                backgroundColor: backgroundColor,
                color: "white",
                "&:hover": { backgroundColor: hoverBackgroundColor },
                py: 1,
                minWidth: 40
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
}

export default Buttons
