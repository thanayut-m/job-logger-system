import Buttons from "../../../components/MUI/Buttons"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Modals from "../../../components/MUI/Modals";
import Title_CreateUsers from "./ModalCreateUsers/Title_CreateUsers";
import Detail_CreateUsers from "./ModalCreateUsers/Detail_CreateUsers";
import Footer_CreateUsers from "./ModalCreateUsers/Footer_CreateUsers";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CardTitleManageUser = ({
    openModal,
    handleOpen,
    handleClose,
    menuItems
}) => {
    const { register, handleSubmit, reset } = useForm();

    const handleSaveUsers = (data) => {
        try {
            console.log(data)

            Swal.fire({
                icon: "success",
                title: "สมัครสมาชิกสำเร็จ",
                showConfirmButton: false,
                timer: 1000
            })

            reset();
            handleClose();
        } catch (err) {
            console.log("Error : " + err);
            return null;
        }
    }


    return (

        <div className="bg-white rounded-xl shadow-2xl p-3">
            <div className="flex justify-between" >
                <div> จัดการผู้ใช้งาน</div>
                <div className='bg-blue-500 hover:bg-blue-400 hover:text-white rounded-xl gap2 flex flex-row items-center'>
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
                moDalWidth="40%"
                titleModal={<Title_CreateUsers />}
                detailModal={<Detail_CreateUsers
                    register={register}
                    menuItems={menuItems}
                />}
                footerModal={<Footer_CreateUsers
                    onClick={handleSubmit(handleSaveUsers)} />}

            />
        </div>
    )
}
export default CardTitleManageUser