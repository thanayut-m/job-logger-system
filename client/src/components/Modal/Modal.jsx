import { Box, Button, Typography, Modal as MuiModal } from "@mui/material";
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { IoMdClose } from "react-icons/io";
import FormFooter from "./FormFooter";

const Modal = ({
    open,
    handleClose,
    children,
    textName
}) => {
    const handleCloseCallback = useCallback(() => {
        handleClose();
    }, [handleClose]);

    return (
        <MuiModal open={open}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    width: '60%',
                    // maxWidth: '800px',
                    height: '90%',
                    // maxHeight: '90%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                }}
            >
                {/* Close Button */}
                <Button
                    onClick={handleCloseCallback}
                    color="primary"
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                    }}
                >
                    <IoMdClose size={30} />
                </Button>

                {/* Title */}
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {textName}
                </Typography>

                {/* Content Section */}
                <Box
                    sx={{
                        flexGrow: 1,
                        overflowY: 'auto',
                        marginY: 2,
                    }}
                >
                    {children}

                </Box>

                {/* Footer */}
                <FormFooter>
                    <Button
                        variant="contained"
                    >
                        บันทึก
                    </Button>
                </FormFooter>
            </Box>
        </MuiModal>
    );
};

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    textName: PropTypes.string.isRequired,
};

export default Modal;
