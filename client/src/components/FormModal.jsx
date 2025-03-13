import { useRef } from "react";
import Buttons from "./Buttons";
import PropTypes from "prop-types";
import Modal from "./Modal";

const FormModal = ({
    children,
    className,
    size,
    title,
    detail,
    footer
}) => {
    const modalRef = useRef(null);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };


    return (
        <div>
            <Buttons
                onClick={openModal}
                className={className}
            >
                {children}
            </Buttons>
            <Modal
                size={size}
                ref={modalRef}
                title={title}
                detail={detail}
                footer={footer}
            />
        </div>
    )
}

FormModal.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    size: PropTypes.string,
    title: PropTypes.string,
    detail: PropTypes.string,
    footer: PropTypes.node,
};

export default FormModal