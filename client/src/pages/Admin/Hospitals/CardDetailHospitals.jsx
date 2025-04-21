import { TableCell } from "@mui/material"
import ReusableTable from "../../../components/MUI/Table/ReusableTable"
import { useState } from "react";
import Buttons from "../../../components/MUI/Buttons";
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';
import Modals from "../../../components/MUI/Modals";
import Title_ChangeHospitals from "./ModalChangeHospitals/Title_ChangeHospitals";
import Detail_ChangeHospitals from "./ModalChangeHospitals/Detail_ChangeHospitals";
import Footer_ChangeHospitals from "./ModalChangeHospitals/Footer_ChangeHospitals";
import Switches from "../../../components/MUI/switches";

const columns = [
    { label: "ลำดับ", align: 'center' },
    { label: "โรงพยาบาล", align: 'center' },
    { label: "Status", align: 'center' },
    { label: "Action", align: 'center' },
]

const CardDetailHospitals = ({
    hospitalInfo,
    handleOpen,
    handleClose,
    openModal,
    register,
    selectedRow,
    reset,
    errors,
    handleStatusHospital,
    handleChangeHospitals,
    handleSubmit
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
                rows={hospitalInfo}
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
                            {row.hospital_name}
                        </TableCell>
                        <TableCell align="center" >
                            <Switches
                                register={register}
                                name="Hospital_status"
                                onClick={() => handleStatusHospital(row)}
                                checked={Boolean(row.hospital_status)}
                            />
                        </TableCell>
                        <TableCell align="center" >
                            <Buttons
                                variant="contained"
                                backgroundColor="#FF9900"
                                hoverBackgroundColor="#FF9999"
                                onClick={() => {
                                    reset();
                                    handleOpen("changeHospitals", row)
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
                        modalName="changeHospitals"
                        moDalWidth="45%"
                        titleModal={
                            <Title_ChangeHospitals />
                        }
                        detailModal={
                            <div>
                                <Detail_ChangeHospitals
                                    register={register}
                                    row={selectedRow}
                                    errors={errors}
                                />
                            </div>
                        }
                        footerModal={
                            <Footer_ChangeHospitals
                                onClick={handleSubmit(handleChangeHospitals)}
                            />
                        }
                    />
                )
            }

        </div>
    )
}

CardDetailHospitals.propTypes = {
    hospitalInfo: PropTypes.arrayOf(
        PropTypes.shape({
            hospital_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            , hospital_name: PropTypes.string.isRequired,
            status: PropTypes.bool
        })
    ),
    handleOpen: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    openModal: PropTypes.bool.isRequired,
    register: PropTypes.func.isRequired,
    selectedRow: PropTypes.object.isRequired,
    reset: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChangeHospitals: PropTypes.func.isRequired,
    handleStatusHospital: PropTypes.func.isRequired,
}
export default CardDetailHospitals