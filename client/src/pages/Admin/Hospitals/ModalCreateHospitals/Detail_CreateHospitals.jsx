import Input from "../../../../components/MUI/Input"
import PropTypes from 'prop-types';

const Detail_CreateHospitals = ({
    register,
    errors
}) => {
    return (
        <div className="grid grid-cols-1">
            <Input
                register={register}
                name="hospital_name"
                label="ชื่อโรงพยาบาล"
                type="text"
                variant="outlined"
                errors={errors}
            />
        </div>
    )
}
Detail_CreateHospitals.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}


export default Detail_CreateHospitals