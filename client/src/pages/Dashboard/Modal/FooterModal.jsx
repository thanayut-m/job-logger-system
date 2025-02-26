const FooterModal = ({ onSubmit }) => {

    return (
        <div className="flex justify-end">
            <button
                className="btn btn-primary"
                onClick={onsubmit}
            >
                ยืนยัน
            </button>
        </div>
    )
}
export default FooterModal