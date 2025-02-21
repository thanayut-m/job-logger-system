import { Box, Button, Typography, Modal as MuiModal } from "@mui/material";
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { IoMdClose } from "react-icons/io";

const Modal = ({ open, handleClose }) => {
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
                    width: '90%',
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
                    ลงข้อมูลปัญหา
                </Typography>

                {/* Content Section */}
                <Box
                    sx={{
                        flexGrow: 1,
                        overflowY: 'auto',
                        marginY: 2,
                    }}
                >
                    <Typography variant="body1">
                        Detail
                    </Typography>
                </Box>

                {/* Footer */}
                <Box sx={{ width: '100%', textAlign: 'end', padding: 1, borderTop: '1px solid #ddd' }}>
                    <Typography variant="caption">
                        <Button
                            variant="contained"
                        >
                            บันทึก
                        </Button>
                    </Typography>
                </Box>

            </Box>
        </MuiModal>
    );
};

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default Modal;
