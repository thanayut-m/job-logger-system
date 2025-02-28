import Modal from "../../../components/Modal"
import DetailModal from "./DetailModal";
import FooterModal from "./FooterModal";
import TitleModal from './TitleModal';
import { useForm } from 'react-hook-form';


const DashboardModal = () => {
    const { register, handleSubmit, setValue } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Modal
            label="เพิ่มข้อมูล"
            title={<TitleModal />}
            detail={<DetailModal register={register} setValue={setValue} />}
            footer={< FooterModal onSubmit={handleSubmit(onSubmit)} />}
        />
    )
}
export default DashboardModal