import { useState } from "react";
import ReusableTable from "../../../components/MUI/Table/ReusableTable"
import { TableCell } from "@mui/material";
import Switches from "../../../components/MUI/switches";
import Buttons from "../../../components/MUI/Buttons";
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';
import Modals from "../../../components/MUI/Modals";
import Title_ChangeChannels from "./ModalChangeChannels/Title_ChangeChannels";
import Detail_ChangeChannels from "./ModalChangeChannels/Detail_ChangeChannels";
import Footer_ChangeChannels from "./ModalChangeChannels/Footer_ChangeChannels";

const columns = [
    { label: "ลำดับ", align: 'center' },
    { label: "ช่องทางติดต่อ", align: 'center' },
    { label: "Status", align: 'center' },
    { label: "Action", align: 'center' },
]

const CardDetailChannels = ({
    channelInfo,
    register,
    handleSubmit,
    handleStatusChannel,
    handleOpen,
    handleClose,
    openModal,
    reset,
    selectedRow,
    errors,
    handleChangeChannel
}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <ReusableTable
                columns={columns}
                rows={channelInfo}
                page={page}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                onPageChange={handleChangePage}
                renderRow={(row, index) => (
                    <>
                        <TableCell align="center">
                            {page * rowsPerPage + index + 1}
                        </TableCell>
                        <TableCell align="center" >
                            {row.todo_Channels_name}
                        </TableCell>
                        <TableCell align="center" >
                            <Switches
                                register={register}
                                name="hospital_status"
                                onClick={() => handleStatusChannel(row)}
                                checked={Boolean(row.todo_Channels_status)}
                            />
                        </TableCell>
                        <TableCell align="center" >
                            <Buttons
                                variant="contained"
                                backgroundColor="#FF9900"
                                hoverBackgroundColor="#FF9999"
                                onClick={() => {
                                    reset();
                                    handleOpen("changeChannel", row)
                                }}
                            >
                                <EditIcon />
                            </Buttons>
                        </TableCell>
                    </>
                )}
            />

            {selectedRow &&
                (
                    <Modals
                        open={openModal}
                        onClick={() => {
                            handleClose();
                        }}
                        modalName="changeChannel"
                        moDalWidth="45%"
                        titleModal={
                            <Title_ChangeChannels />
                        }
                        detailModal={
                            <Detail_ChangeChannels
                                register={register}
                                row={selectedRow}
                                errors={errors}
                            />
                        }
                        footerModal={
                            <Footer_ChangeChannels
                                onClick={handleSubmit(handleChangeChannel)}
                            />
                        }
                    />

                )
            }

        </div>
    )
}

CardDetailChannels.propTypes = {
    channelInfo: PropTypes.arrayOf(
        PropTypes.shape({
            todo_Channels_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            , todo_Channels_name: PropTypes.string.isRequired,
            todo_Channels_status: PropTypes.bool
        }),
    ),
    register: PropTypes.func.isRequired,
}
export default CardDetailChannels