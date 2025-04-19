import Input from "../../../../components/MUI/Input"
import PropTypes from 'prop-types';

const Detail_ChangeHospitals = ({
    register,
    row,
    errors
}) => {
    return (
        <div className="grid grid-rows-1" >
            <Input
                register={register}
                name="hospital_name"
                label="ชื่อโรงพยาบาล"
                errors={errors}
                defaultValue={row.hospital_name || ""}

            />
            <input type="hidden" value={row.hospital_id} {...register("hospital_id")} />\
            <input type="hidden" value={row.hospital_status} {...register("hospital_status")} />
        </div>
    )
}

Detail_ChangeHospitals.propTypes = {
    register: PropTypes.func.isRequired,
    row: PropTypes.shape({
        hospital_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        hospital_name: PropTypes.string,
        hospital_status: PropTypes.bool,
    }).isRequired,
    errors: PropTypes.object.isRequired
}

export default Detail_ChangeHospitals