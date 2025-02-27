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
            <dialog ref={modalRef} className="modal">
                <div className="modal-box max-w-5xl w-full h-[90%] flex flex-col">
                    {/* ปุ่มปิด Modal */}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>

                    {/* Title (Fixed at Top) */}
                    <div className="p-3 bg-white">
                        <h3 className="font-semibold text-2xl">{title}</h3>
                    </div>

                    {/* Detail (Scrollable) */}
                    <div className="flex-grow overflow-y-auto p-4">
                        {detail}
                    </div>

                    {/* Footer (Fixed at Bottom) */}
                    <div className=" p-4 bg-white">
                        {footer}
                    </div>
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