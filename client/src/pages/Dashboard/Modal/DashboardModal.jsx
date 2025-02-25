import Modal from "../../../components/Modal"
import DetailModal from "./DetailModal";
import FooterModal from "./FooterModal";
import TitleModal from './TitleModal';


const DashboardModal = () => {
    return (
        <Modal
            label="เพิ่มข้อมูล"
            title={<TitleModal />}
            detail={<DetailModal />}
            footer={< FooterModal />}
        />
    )
}
export default DashboardModal