import PropTypes from "prop-types";
import FormInput from "../../../../components/FormInput"
import FormSelect from './../../../../components/FormSelect';

const DetailModal = ({
    register,
}) => {
    const menuOptions = [
        { value: 1, text: "ชื่อทดสอบ-นามสกุลทดสอบ1" },
        { value: 2, text: "ชื่อทดสอบ-นามสกุลทดสอบ2" },
        { value: 3, text: "ชื่อทดสอบ-นามสกุลทดสอบ3" },
    ];

    return (
        <form className="flex flex-col gap-3 w-full mx-auto">
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 mt-6">
                <FormInput
                    label="ชื่อ"
                    register={register}
                    name="first_name"
                    type="text"
                    placeholder="First Name..."
                />
                <FormInput
                    label="นามสกุล"
                    register={register}
                    name="last_name"
                    type="text"
                    placeholder="Last Name..."
                />
                <FormSelect
                    register={register}
                    name="position"
                    label="ตำแหน่ง"
                    options={menuOptions}
                />
                <FormSelect
                    register={register}
                    name="status"
                    label="สถานะ"
                    options={menuOptions}
                />
            </div>
        </form>
    )
}

DetailModal.propTypes = {
    register: PropTypes.object.isRequired,
    setValue: PropTypes.func.isRequired,
};

export default DetailModal