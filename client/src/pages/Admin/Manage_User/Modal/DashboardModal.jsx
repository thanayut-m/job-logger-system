
import { useForm } from 'react-hook-form';
import TitleModal from './TitleModal';
import DetailModal from './DetailModal';
import FooterModal from "./FooterModal";
import { FaUserEdit } from "react-icons/fa";
import FormModal from '../../../../components/FormModal.jsx';


const DashboardModal = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    }

    const onClose = () => {
        console.log("Modal closed");
    }


    return (
        <div>
            <FormModal
                size="max-w-2xl"
                className="bg-amber-500 hover:bg-amber-400 hover:text-white"
                title={<TitleModal />}
                detail={<DetailModal register={register} />}
                footer={<FooterModal onSubmit={handleSubmit(onSubmit)} onClose={onClose} />}
            >
                <FaUserEdit />
            </FormModal>
        </div>
    )
}


export default DashboardModal