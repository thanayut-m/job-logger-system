import PropTypes from "prop-types";
import DataTable from 'react-data-table-component';
import DashboardModal from "./Modal/DashboardModal";


const CardDetailManageUser = ({
    manageUserInfo,
    totalRows,
    handlePageChange,
    handlePerRowsChange
}) => {

    const columns = [
        {
            name: 'ลำดับ',
            selector: (row, index) => index + 1,
            sortable: true,
        },
        {
            name: 'Username',
            selector: row => row.username,
            sortable: true,
        },
        {
            name: 'name',
            selector: row => `${row.first_name ?? ''} ${row.last_name ?? ''}`.trim(),
            sortable: true,
        },
        {
            name: 'ตำแหน่ง',
            selector: row => row.role,
            sortable: true,
        },
        {
            name: 'สถานะ',
            cell: row => {
                const isActive = row.status === true || row.status === "true" || row.status === 1 || row.status === "1";

                return (
                    <span
                        className={`px-2 py-1 rounded-full text-white text-sm font-medium ${isActive ? "bg-green-700" : "bg-red-700"
                            }`}
                    >
                        {isActive ? "เปิดใช้งาน" : "ปิดใช้งาน"}
                    </span>
                );
            },
            sortable: true,
        },
        {

            cell: row => <>
                <DashboardModal />
            </>
            ,
            sortable: false,
        },
    ];


    return (
        <div className="bg-white rounded-xl shadow-2xl p-3 items-end ">
            <div className='w-full'>
                {manageUserInfo.length > 0 ? (
                    <DataTable
                        columns={columns}
                        data={manageUserInfo}
                        pagination
                        paginationServer
                        paginationTotalRows={totalRows}
                        onChangeRowsPerPage={handlePerRowsChange}
                        onChangePage={handlePageChange}
                    />
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

CardDetailManageUser.propTypes = {
    manageUserInfo: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            first_name: PropTypes.string.isRequired,
            last_name: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
        })
    ).isRequired,
    totalRows: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
    handlePerRowsChange: PropTypes.func.isRequired,
};


export default CardDetailManageUser