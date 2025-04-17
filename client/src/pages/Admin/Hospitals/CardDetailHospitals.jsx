import { TableCell } from "@mui/material"
import ReusableTable from "../../../components/MUI/Table/ReusableTable"

const columns = [
    { label: "ลำดับ", align: 'center' },
    { label: "โรงพยาบาล", align: 'center' },
    { label: "โรงพยาบาล", align: 'center' }
]

const CardDetailHospitals = () => {
    // const [page, setPage] = useState(0);
    // const [rowsPerPage, setRowsPerPage] = useState(10);

    return (
        <div>
            <ReusableTable
                columns={columns}

                renderRow={(row, index) => (
                    <>
                        <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                    </>
                )}
            />
        </div>
    )
}
export default CardDetailHospitals