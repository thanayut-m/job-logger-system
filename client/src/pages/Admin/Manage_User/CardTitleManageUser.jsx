import { useRef } from 'react';
import Buttons from './../../../components/Buttons';
import { IoIosPersonAdd } from "react-icons/io";
import DashboardModal from './Modal/DashboardModal';

const CardTitleManageUser = () => {
    const modalRef = useRef(null);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-2xl p-3">
            <div className="flex justify-between" >
                <div> จัดการผู้ใช้งาน</div>
                <div className='bg-blue-500 hover:bg-blue-400 hover:text-white rounded-xl gap2 flex flex-row items-center'>
                    {/* <Buttons
                        type="button"
                        onClick={openModal}
                    >
                        <IoIosPersonAdd className="text-xl mr-2" />
                        ลงทะเบียนสมาชิกใหม่
                    </Buttons> */}
                    <DashboardModal />
                </div>
            </div>
        </div>
    )
}
export default CardTitleManageUser