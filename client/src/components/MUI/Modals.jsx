import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Buttons from './Buttons';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Modals = ({
    children,
    titleModal,
    detailModal,
    footerModal,
    backgroundColor,
    hoverBackgroundColor,
    moDalWidth
}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Buttons
                variant="contained"
                onClick={handleOpen}
                backgroundColor={backgroundColor}
                hoverBackgroundColor={hoverBackgroundColor}
            >
                {children}
            </Buttons>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: moDalWidth,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',

                }}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{
                            fontSize: '1.5rem',
                            fontWeight: 'bold',
                        }}
                    >
                        {titleModal}
                    </Typography>
                    <Box
                        id="modal-modal-description"
                        sx={{
                            mt: 2
                        }}
                    >
                        {detailModal}
                    </Box>
                    <Box
                        id="modal-modal-footer"
                        sx={{
                            mt: 2,
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: 1
                        }}
                    >
                        <Buttons
                            variant="contained"
                            onClick={handleClose}
                            backgroundColor="#FF0000"
                            hoverBackgroundColor="#FFA500"
                        >
                            ยกเลิก
                        </Buttons>
                        {footerModal}
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

Modals.propTypes = {
    children: PropTypes.node.isRequired,
    titleModal: PropTypes.string,
    detailModal: PropTypes.string,
    footerModal: PropTypes.string,
    backgroundColor: PropTypes.string,
    hoverBackgroundColor: PropTypes.string,
    moDalWidth: PropTypes.string,
}


export default Modals