import { useState } from "react";
import ReusableTable from "../../../components/MUI/Table/ReusableTable";
import { TableCell } from "@mui/material";
import Switches from "../../../components/MUI/switches";
import Buttons from "../../../components/MUI/Buttons";
import EditIcon from '@mui/icons-material/Edit';
import Modals from "../../../components/MUI/Modals";
import Title_ChangeLaSupport from "./ModalChangeLaSupport/Title_ChangeLaSupport";
import Detail_ChangeLaSupport from "./ModalChangeLaSupport/Detail_ChangeLaSupport";
import Footer_ChangeLaSupport from "./ModalChangeLaSupport/Footer_ChangeLaSupport";
import PropTypes from 'prop-types';


const columns = [
    { label: "ลำดับ", align: 'center' },
    { label: "หมวดหมู่", align: 'center' },
    { label: "Status", align: 'center' },
    { label: "Action", align: 'center' },
]

const CardDetailLaSupport = ({
    supportLaInfo,
    register,
    handleStatusLaSupport,
    handleChangeLaSupport,
    openModal,
    handleClose,
    handleOpen,
    reset,
    handleSubmit,
    errors,
    selectedRow
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
        <div >
            <ReusableTable
                columns={columns}
                rows={supportLaInfo}
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
                            {row.todo_la_Support_name}
                        </TableCell>
                        <TableCell align="center" >
                            <Switches
                                register={register}
                                name="la_support_status"
                                onClick={() => handleStatusLaSupport(row)}
                                checked={Boolean(row.todo_la_Support_status)}
                            />
                        </TableCell>
                        <TableCell align="center" >
                            <Buttons
                                variant="contained"
                                backgroundColor="#FF9900"
                                hoverBackgroundColor="#FF9999"
                                onClick={() => {
                                    reset();
                                    handleOpen("changeLaSupport", row)
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
                        modalName="changeLaSupport"
                        moDalWidth="45%"
                        titleModal={
                            <Title_ChangeLaSupport />
                        }
                        detailModal={
                            <Detail_ChangeLaSupport
                                register={register}
                                row={selectedRow}
                                errors={errors}
                            />
                        }
                        footerModal={
                            <Footer_ChangeLaSupport
                                onClick={handleSubmit(handleChangeLaSupport)}
                            />
                        }

                    />
                )}

        </div >
    )
}

CardDetailLaSupport.propTypes = {
    supportLaInfo: PropTypes.array.isRequired,
    register: PropTypes.func.isRequired,
    handleStatusLaSupport: PropTypes.func,
    handleChangeLaSupport: PropTypes.func,
    openModal: PropTypes.any,
    handleClose: PropTypes.func,
    handleOpen: PropTypes.func,
    reset: PropTypes.func,
    handleSubmit: PropTypes.func,
    errors: PropTypes.object,
    selectedRow: PropTypes.object,
};

export default CardDetailLaSupport