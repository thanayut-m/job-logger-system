import { Input } from "@mui/material";
import Buttons from "../../../components/MUI/Buttons";
import PropTypes from 'prop-types';

const CardTitleHospitals = ({
    register
}) => {
    return (
        <div className="bg-white rounded-xl shadow-2xl p-3">
            <div className="flex justify-between" >
                <div>CardTitleHospitals</div>
                <div>
                    <div className='grid grid-cols-2 gap-3 items-center'>
                        <Input
                            register={register}
                            name="searchManage"
                            type="text"
                            label="Search"
                        />
                        <Buttons
                            variant="contained"
                            backgroundColor="#FF9900"
                            hoverBackgroundColor="#FF9999"
                        >
                            เพิ่มบัญชีผู้ใช้
                        </Buttons>
                    </div>
                </div>
            </div>
        </div>
    )
}

CardTitleHospitals.propTypes = {
    register: PropTypes.func.isRequired
}

export default CardTitleHospitals