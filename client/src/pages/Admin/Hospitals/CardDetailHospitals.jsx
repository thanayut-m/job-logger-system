import { TableCell } from "@mui/material"
import ReusableTable from "../../../components/MUI/Table/ReusableTable"
import { useState } from "react";
import Buttons from "../../../components/MUI/Buttons";
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from 'prop-types';

const columns = [
    { label: "ลำดับ", align: 'center' },
    { label: "โรงพยาบาล", align: 'center' },
    { label: "Status", align: 'center' },
    { label: "Action", align: 'center' },
]

const CardDetailHospitals = ({
    hospitalInfo
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
                        <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                        <TableCell align="center" >{row.hospital_name}</TableCell>
                        <TableCell align="center" >
                            <p className="text-lg bg-red-600 rounded-3xl text-white">รอเพิ่มเงื่อนไข</p>
                        </TableCell>
                        <TableCell align="center" >
                            <Buttons
                                variant="contained"
                                backgroundColor="#FF9900"
                                hoverBackgroundColor="#FF9999"
                            >
                                <EditIcon />
                            </Buttons>
                        </TableCell>
                    </>
                )}
            />
        </div>
    )
}

CardDetailHospitals.propTypes = {
    hospitalInfo: PropTypes.arrayOf(
        PropTypes.shape({
            hospital_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            , hospital_name: PropTypes.string.isRequired
        })
    )
}
export default CardDetailHospitals