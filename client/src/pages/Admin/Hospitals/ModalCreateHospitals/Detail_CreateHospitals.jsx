import Input from "../../../../components/MUI/Input"

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
export default Detail_CreateHospitals