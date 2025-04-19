import Buttons from "../../../components/MUI/Buttons";
import Input from "../../../components/MUI/Input";
import Modals from "../../../components/MUI/Modals";
import PropTypes from 'prop-types';
import Title_CreateChannels from "./ModalCreateChannels/Title_CreateChannels";
import Detail_CreateChannels from "./ModalCreateChannels/Detail_CreateChannels";
import Footer_CreateChannels from "./ModalCreateChannels/Footer_CreateChannels";

const CardTitleChannels = ({
    register,
    reset,
    handleOpen,
    openModal,
    handleClose,
    handleSubmit,
    handleCreateChannel,
    errors
}) => {
    return (
        <div className="bg-white rounded-xl shadow-2xl p-3">
            <div className="flex justify-between items-center px-2" >
                <div className="text-2xl font-semibold">ช่องทางติดต่อ</div>
                <div>
                    <div className='grid grid-cols-2 gap-3  '>
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
                                handleOpen("createChannels");
                            }}
                        >
                            เพิ่มช่องทางติดต่อ
                        </Buttons>
                    </div>
                </div>
            </div>

            <Modals
                modalName="createChannels"
                moDalWidth="40%"
                open={openModal}
                onClick={handleClose}
                titleModal={
                    <Title_CreateChannels />
                }
                detailModal={
                    <Detail_CreateChannels
                        register={register}
                        errors={errors}
                    />
                }
                footerModal={
                    <Footer_CreateChannels
                        onClick={handleSubmit(handleCreateChannel)} />
                }
            />
        </div>
    )
}
CardTitleChannels.propTypes = {
    register: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    handleOpen: PropTypes.func.isRequired,
    openModal: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleCreateChannel: PropTypes.func.isRequired,
    errors: PropTypes.func.isRequired
}

export default CardTitleChannels