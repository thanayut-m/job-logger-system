
import Buttons from "../../../components/MUI/Buttons";
import PropTypes from 'prop-types';
import Input from "../../../components/MUI/Input";
import Modals from "../../../components/MUI/Modals";
import Title_CreateHospitals from "./ModalCreateHospitals/Title_CreateHospitals";
import Detail_CreateHospitals from "./ModalCreateHospitals/Detail_CreateHospitals";
import Footer_CreateHospitals from "./ModalCreateHospitals/Footer_CreateHospitals";

const CardTitleHospitals = ({
    register,
    handleOpen,
    handleClose,
    openModal,
    reset,
    onClick,
    errors
}) => {
    return (
        <div className="bg-white rounded-xl shadow-2xl p-3">
            <div className="flex justify-between" >
                <div>CardTitleHospitals</div>
                <div>
                    <div className='grid grid-cols-2 gap-3 items-center'>
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
                                handleOpen("createHospitals");
                            }}
                        >
                            เพิ่มโรงพยาบาล
                        </Buttons>
                    </div>
                </div>
            </div>

            <Modals
                open={openModal}
                onClick={() => {
                    handleClose();
                }}
                modalName="createHospitals"
                moDalWidth="45%"
                titleModal={
                    <Title_CreateHospitals />
                }
                detailModal={
                    <Detail_CreateHospitals
                        register={register}
                        errors={errors}
                    />
                }
                footerModal={
                    <Footer_CreateHospitals
                        onClick={onClick}
                    />
                }
            />
        </div>
    )
}

CardTitleHospitals.propTypes = {
    register: PropTypes.func.isRequired,
    handleOpen: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired

}

export default CardTitleHospitals