import PropTypes from "prop-types"
import Input from "../../../../components/MUI/Input"

const Detail_CreateLaSupport = ({
    errors,
    register
}) => {
    return (
        <div className="grid grid-cols-1" >
            <Input
                register={register}
                name="la_support_name"
                label="ชื่อโปรแกรม"
                type="text"
                variant="outlined"
                errors={errors}
            />
        </div >
    )
}

Detail_CreateLaSupport.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

export default Detail_CreateLaSupport