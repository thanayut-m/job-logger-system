import PropTypes from "prop-types";
import Buttons from "../../../../components/Buttons";

const FooterModal = ({
    onSubmit,
    onClose }) => {
    return (
        <div className="flex justify-end gap-2">
            <Buttons
                onClick={onClose}
                className="bg-red-500 hover:bg-red-400 hover:text-white text-sm w-[100px]"
            >
                ปิด
            </Buttons>
            <Buttons
                onClick={onSubmit}
                className="bg-blue-500 hover:bg-blue-400 hover:text-white text-sm w-[100px]"
            >
                บันทึกข้อมูล
            </Buttons>
        </div>
    );
};

FooterModal.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default FooterModal;
