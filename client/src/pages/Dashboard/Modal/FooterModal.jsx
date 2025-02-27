import PropTypes from 'prop-types';

const FooterModal = ({
    onSubmit
}) => {
    return (
        <div className="flex justify-end">
            <button
                className="btn btn-primary"
                onClick={onSubmit}
            >
                ยืนยัน
            </button>
        </div>
    )
}

FooterModal.propTypes = {
    onSubmit: PropTypes.func
}

export default FooterModal