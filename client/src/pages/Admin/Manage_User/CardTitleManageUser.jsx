import Buttons from "../../../components/MUI/Buttons"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Modals from "../../../components/MUI/Modals";
import Title_CreateUsers from "./ModalCreateUsers/Title_CreateUsers";
import Detail_CreateUsers from "./ModalCreateUsers/Detail_CreateUsers";
import Footer_CreateUsers from "./ModalCreateUsers/Footer_CreateUsers";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import axios from "axios";
import { api } from "../../../functions/Api";
import Input from "../../../components/MUI/Input";

const { VITE_API_PATH } = import.meta.env
import { signUpSchema } from './../../../utils/Schema';


const CardTitleManageUser = ({
    openModal,
    handleOpen,
    handleClose,
    menuItems,
    fetchData,

}) => {
    const { handleSubmit, register, reset, formState } = useForm({
        resolver: zodResolver(signUpSchema)
    });

    const { errors } = signUpSchema
    console.log(errors);

    const handleSaveUsers = async (data) => {
        try {
            const res = await axios.post(VITE_API_PATH + `/Manage_User/createMember`,
                data,
                { headers: api.headers() }
            )
            const message = res.data.message

            console.log(message)

            if (message === "success") {
                Swal.fire({
                    icon: "success",
                    title: "สมัครสมาชิกสำเร็จ",
                    showConfirmButton: false,
                    timer: 1000
                })
                reset();
                handleClose();
                fetchData();
            }
        } catch (err) {
            console.log("Error : " + err);
            return null;
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-2xl p-3">
            <div className="flex justify-between" >
                <div> จัดการผู้ใช้งาน</div>
                <div className='grid grid-cols-2 gap-3 items-center'>
                    <Input
                        register={register}
                        name="searchManage"
                        type="text"
                        label="Search"
                    />
                    <Buttons
                        variant="contained"
                        backgroundColor="#FF9900"
                        hoverBackgroundColor="#FF9999"
                        onClick={() => {
                            reset();
                            handleOpen("createUsers");
                        }}
                    >
                        <PersonAddIcon fontSize="medium" />
                        เพิ่มบัญชีผู้ใช้
                    </Buttons>
                </div>
            </div>

            <Modals
                open={openModal}
                onClick={() => {
                    handleClose();
                }}
                modalName="createUsers"
                moDalWidth="45%"
                titleModal={<Title_CreateUsers />}
                detailModal={<Detail_CreateUsers
                    register={register}
                    menuItems={menuItems}
                    errors={errors}
                />}
                footerModal={<Footer_CreateUsers
                    onClick={handleSubmit(handleSaveUsers)} />}

            />
        </div>
    )
}
export default CardTitleManageUser