import { Box, Typography } from "@mui/material"
import PropTypes from "prop-types";

const FormFooter = ({
    children
}) => {
    return (

        <Box sx={{ width: '100%', textAlign: 'end', padding: 1, borderTop: '1px solid #ddd' }}>
            <Typography variant="caption">
                {children}
            </Typography>
        </Box>
    )
}

FormFooter.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FormFooter