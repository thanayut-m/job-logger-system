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
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { useState } from 'react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Modals from '../../../components/MUI/Modals';
import Title from './ModalManageUsers/Title';
import Detail from './ModalManageUsers/Detail';
import Footer from './ModalManageUsers/Footer';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { api } from '../../../functions/Api';
import Swal from 'sweetalert2';
import Title_ResetPassword from './ModalResetPassword/Title_ResetPassword';
import Detail_ResetPassword from './ModalResetPassword/Detail_ResetPassword';
import Footer_ResetPassword from './ModalResetPassword/Footer_ResetPassword';


const { VITE_API_PATH } = import.meta.env

const CardDetailManageUser = ({
    menuItems,
    manageUserInfo,
    fetchData,
    userID
}) => {
    const { register, reset, handleSubmit } = useForm();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [openModal, setOpenModal] = useState(null);
    const [selectUser, setSelectUser] = useState(null)
    const [resetPassword, setResetPassword] = useState(null)
    const [randomPassword, setRandomPassword] = useState('');

    const handleOpen = (modal, user) => {
        setOpenModal(modal)
        setSelectUser(user)
        setResetPassword(user)
        reset(user)
    };
    const handleClose = () => {
        setOpenModal(null)
    };

    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSaveManageUsers = async (data) => {
        try {
            console.log(data)
            const res = await axios.put(VITE_API_PATH + `/Manage_User/updateMember`,
                data,
                { headers: api.headers() });

            console.log(res)

            if (res.data.message === 'success') {
                Swal.fire({
                    title: "แก้ไขข้อมูลสำเร็จ",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                });
                handleClose();
                fetchData();
            }
        } catch (err) {
            console.log("Error : " + err);
            return null;
        }
    }

    const generateRandomPassword = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
        let password = '';
        const passwordLength = 5;

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        setRandomPassword(password);

    };

    const handleSaveResetPassword = async (data) => {
        try {
            console.log(data)
        } catch (err) {
            console.log("Error : " + err);
            return null;
        }
    }

    const handleStatus = async (data, row) => {
        try {
            if (userID === row.user_id) {
                Swal.fire({
                    title: "Error",
                    icon: "error",
                    text: "You cannot change         s!",
                    showConfirmButton: false,
                    timer: 1500,
                })
                return;
            }
            const res = await axios.put(VITE_API_PATH + `/Manage_User/updateStatus`,
                {
                    user_id: row.user_id,
                    status: !row.status
                },
                {
                    headers: api.headers()
                })
            if (res.data.message === 'success') {
                // console.log(res.data)
                fetchData();
            }
        } catch (err) {
            console.log("Error : " + err);
            return null;
        }
    }

    return (
        <div>
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
                                <TableCell align="center" sx={{ fontWeight: 'bold' }}>เข้าสู่ระบบล่าสุด</TableCell>
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
                                        <TableCell align="center">
                                            {row.role === "admin" ? "หัวหน้างาน" : "พนักงาน"}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Switches
                                                register={register}
                                                name="status"
                                                onClick={() => handleSubmit(handleStatus)(row)}
                                                checked={Boolean(row.status)}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            {row.users_update_at
                                                ? format(new Date(row.users_update_at), "dd/MM/yyyy HH:mm", { locale: th })
                                                : "N/A"}
                                        </TableCell>
                                        <TableCell sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                                            <Buttons
                                                variant="contained"
                                                backgroundColor="#FF9900"
                                                hoverBackgroundColor="#FF9999"
                                                onClick={() => handleOpen("modalUpdateUsers", row)}
                                            >
                                                <ManageAccountsIcon />
                                            </Buttons>
                                            <Buttons
                                                variant="contained"
                                                backgroundColor="#FFD700"
                                                hoverBackgroundColor="#EEDD82"
                                                onClick={() => {
                                                    generateRandomPassword();
                                                    handleOpen("modalResetPassword", row)
                                                }}
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
                    count={manageUserInfo.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper >

            {selectUser && (
                <Modals
                    open={openModal}
                    onClick={() => {
                        handleOpen();
                        handleClose();
                    }}
                    modalName="modalUpdateUsers"
                    moDalWidth="50%"

                    titleModal={<Title />}
                    detailModal={<Detail
                        menuItems={menuItems}
                        register={register}
                        row={selectUser}
                        userID={userID}
                    />}
                    footerModal={<Footer
                        onClick={handleSubmit(handleSaveManageUsers)}
                    />}

                />
            )}

            {resetPassword && (
                <Modals
                    open={openModal}
                    onClick={() => {
                        handleOpen();
                        handleClose();
                    }}
                    modalName="modalResetPassword"
                    moDalWidth="50%"

                    titleModal={
                        <Title_ResetPassword />
                    }
                    detailModal={
                        <Detail_ResetPassword
                            row={resetPassword}
                            randomPassword={randomPassword}
                            register={register}
                            onClick={generateRandomPassword}
                        />
                    }
                    footerModal={
                        <Footer_ResetPassword
                            onClick={handleSubmit(handleSaveResetPassword)} />
                    }
                />
            )}

        </div>
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
    userID: PropTypes.string,
};

export default CardDetailManageUser;
