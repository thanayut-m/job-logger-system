import { useState } from "react";
import ReusableTable from "../../components/MUI/Table/ReusableTable"

const columns = [
    { label: "ลำดับ", align: 'center' },
    { label: "เลขที่สั่ง", align: 'center' },
    { label: "โรงพยาบาล/หน่วยงาน", align: 'center' },
    { label: "สถานะบริการ", align: 'center' },
    { label: "ช่องทางปัญหา", align: 'center' },
    { label: "TAT", align: 'center' },
    { label: "ปัญหาที่พบ", align: 'center' },
    { label: "วันที่-เวลาที่พบ", align: 'center' },
    { label: "วันที่-เวลาแก้ไขแล้วเสร็จ", align: 'center' },
    { label: "ผู้รับผิดชอบ", align: 'center' },
]

const CardDetailDashboard = () => {
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
                // rows={supportLaInfo}
                page={page}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                onPageChange={handleChangePage}
            />
        </div>
    )
}
export default CardDetailDashboard