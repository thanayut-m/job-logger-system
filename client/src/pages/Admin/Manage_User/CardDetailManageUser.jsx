import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Buttons from '../../../components/MUI/Buttons';
import LockResetIcon from '@mui/icons-material/LockReset';
import Switches from '../../../components/MUI/switches';
import ModalManageUsers from './ModalManageUsers/ModalManageUsers';

const CardDetailManageUser = ({
    manageUserInfo,
    onPageChange,
    onRowsPerPageChange,
    totalRows,
    rowsPerPage,
    page,
    menuItems,
    register,
    onClick
}) => {
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', borderRadius: '16px' }}>
            <TableContainer >
                <Table
                    stickyHeader
                    aria-label="sticky table "
                    size='small'
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>ลำดับ</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>ชื่อผู้ใช้</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }} >ชื่อ-สกุล</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>ตำแหน่ง</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>สถานะ</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {manageUserInfo
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id || index}>
                                    <TableCell align="center">{index + 1 + page * rowsPerPage}</TableCell>
                                    <TableCell align="center">{row.username}</TableCell>
                                    <TableCell align="center">{`${row.first_name} ${row.last_name}`}</TableCell>
                                    <TableCell align="center">{row.role}</TableCell>
                                    <TableCell align="center">
                                        <Switches checked={Boolean(row.status)} />
                                    </TableCell>
                                    <TableCell sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                                        <ModalManageUsers
                                            menuItems={menuItems}
                                            onClick={onClick}
                                            register={register}
                                        />
                                        <Buttons
                                            variant="contained"
                                            backgroundColor="#FFD700"
                                            hoverBackgroundColor="#EEDD82"
                                        >
                                            <LockResetIcon />
                                        </Buttons>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={totalRows}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
            />
        </Paper >
    );
};

CardDetailManageUser.propTypes = {
    manageUserInfo: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            username: PropTypes.string.isRequired,
            first_name: PropTypes.string.isRequired,
            last_name: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            status: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onPageChange: PropTypes.func.isRequired,
    onRowsPerPageChange: PropTypes.func.isRequired,
    totalRows: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    register: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default CardDetailManageUser;
