import Input from "../../../../components/MUI/Input"
import PropTypes from 'prop-types';

const Detail_CreateChannels = ({
    register,
    errors
}) => {
    return (
        <div className="grid grid-rows-1" >
            <Input
                register={register}
                name="channel_name"
                label="ช่องทางติดต่อ"
                errors={errors}
            // defaultValue={row.hospital_name || ""}

            />
            {/* <input type="hidden" value={row.hospital_id} {...register("hospital_id")} />\
            <input type="hidden" value={row.hospital_status} {...register("hospital_status")} /> */}
        </div>
    )
}

Detail_CreateChannels.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.func.isRequired
}

export default Detail_CreateChannels