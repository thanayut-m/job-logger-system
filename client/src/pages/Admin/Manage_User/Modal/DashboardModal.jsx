
import { useForm } from 'react-hook-form';
import TitleModal from './TitleModal';
import DetailModal from './DetailModal';
import FooterModal from "./FooterModal";
import Buttons from '../../../../components/Buttons';
import { FaUserEdit } from "react-icons/fa";
import { useRef } from "react";
import Modal from '../../../../components/Modal.jsx';


const DashboardModal = () => {
    const modalRef = useRef(null);
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    }

    const onClose = () => {
        console.log("Modal closed");
    }

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    return (
        <div>
            <Buttons
                onClick={openModal}
                className="bg-amber-500 hover:bg-amber-400 text-white  "
            >
                <FaUserEdit />

            </Buttons>
            <Modal
                size="max-w-2xl"
                ref={modalRef}
                title={<TitleModal />}
                detail={<DetailModal register={register} />}
                footer={<FooterModal onSubmit={handleSubmit(onSubmit)} onClose={onClose} />}
            />
        </div>
    )
}


export default DashboardModal