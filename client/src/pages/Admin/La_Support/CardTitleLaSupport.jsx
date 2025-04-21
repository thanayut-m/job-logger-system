import PropTypes from "prop-types";
import Buttons from "../../../components/MUI/Buttons";
import Input from "../../../components/MUI/Input";
import Modals from "../../../components/MUI/Modals";
import Title_CreateLaSupport from "./ModalCreateLaSupport/Title_CreateLaSupport";
import Detail_CreateLaSupport from "./ModalCreateLaSupport/Detail_CreateLaSupport";
import Footer_CreateLaSupport from "./ModalCreateLaSupport/Footer_CreateLaSupport";

const CardTitleLaSupport = ({
    register,
    reset,
    handleOpen,
    openModal,
    handleClose,
    errors,
    onClick
}) => {
    return (
        <div className="bg-white rounded-xl shadow-2xl p-3">
            <div className="flex justify-between items-center px-2" >
                <div className="text-2xl font-semibold">La Support</div>
                <div>
                    <div className='grid grid-cols-2 gap-3 '>
                        <Input
                            register={register}
                            name="searchValue"
                            type="text"
                            label="Search"
                        />
                        <Buttons
                            variant="contained"
                            backgroundColor="#FF9900"
                            hoverBackgroundColor="#FF9999"
                            onClick={() => {
                                reset();
                                handleOpen("createLaSupport");
                            }}
                        >
                            เพิ่มหมวดหมู่
                        </Buttons>
                    </div>
                </div>
            </div>

            <Modals
                open={openModal}
                onClick={() => {
                    handleClose();
                }}
                modalName="createLaSupport"
                moDalWidth="45%"
                titleModal={
                    <Title_CreateLaSupport />
                }
                detailModal={
                    <Detail_CreateLaSupport
                        register={register}
                        errors={errors}
                    />
                }
                footerModal={
                    <Footer_CreateLaSupport
                        onClick={onClick}
                    />
                }
            />
        </div>
    )
}

CardTitleLaSupport.propTypes = {
    register: PropTypes.func.isRequired,
    handleOpen: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

export default CardTitleLaSupport