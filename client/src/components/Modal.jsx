import { useRef } from "react";
import PropTypes from "prop-types";
import Buttons from './Buttons';

const Modal = ({ title, detail, footer, label }) => {
    const modalRef = useRef(null);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };

    return (
        <div className="w-full">
            <Buttons
                type="button"
                text={label}
                onClick={openModal}
            />
            <dialog ref={modalRef} className="modal ">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>

                    {/* Title */}
                    <h3 className="font-bold text-lg">{title}</h3>

                    {/* Detail */}
                    <p className="py-4">{detail}</p>

                    {/* Footer */}
                    <div className="mt-2 py-2">{footer}</div>
                </div>
            </dialog>
        </div>
    )
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    footer: PropTypes.node,
    label: PropTypes.string.isRequired
};
export default Modal