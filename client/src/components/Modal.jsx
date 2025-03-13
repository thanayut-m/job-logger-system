import PropTypes from "prop-types";
import { forwardRef } from "react";

const Modal = forwardRef(({ title, detail, footer, size }, ref) => {

    return (
        <div className="w-full">
            <dialog ref={ref} className="modal">
                <div className={`modal-box w-full flex flex-col ${size}`}>
                    {/* ปุ่มปิด Modal */}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">
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
});

Modal.displayName = "Modal";

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    footer: PropTypes.node,
    size: PropTypes.string
};
export default Modal