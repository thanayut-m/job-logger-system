import FormInput from "../../../components/FormInput";
import FormInputDate from "../../../components/FormInputDate";
import TextArea from "../../../components/TextArea"
import FormSelect from '../../../components/FormSelect';
import FormFileInput from "../../../components/FormFileInput";
import PropTypes from 'prop-types';

const DetailModal = ({
    register,
    setValue
}) => {

    const menuOptions = [
        { value: 1, text: "ทั้งหมด" },
        { value: 2, text: "ชื่อทดสอบ-นามสกุลทดสอบ1" },
        { value: 3, text: "ชื่อทดสอบ-นามสกุลทดสอบ2" },
        { value: 4, text: "ชื่อทดสอบ-นามสกุลทดสอบ3" },
    ];


    return (
        <div
            className="grid grid-row gap-2">

            <div className="grid grid-cols-12 gap-2 text-center">
                <div className="col-span-12 ">
                    <FormSelect
                        register={register}
                        name="todo_hospital"
                        label="โรงพยาบาล"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-10">
                    <FormInput
                        register={register}
                        name="todo_note_request"
                        label="ปัญหา"
                        type="input"
                    />
                </div>
                <div className="col-span-2 ">
                    <FormSelect
                        register={register}
                        name="todo_lavel"
                        label="ความเร่งด่วน"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FormSelect
                        register={register}
                        name="user"
                        label="ผู้รับผิดชอบ"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FormSelect
                        register={register}
                        name="todo_period"
                        label="ช่วงเวลา"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FormSelect
                        register={register}
                        name="todo_la_Support_id"
                        label="หมวด"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FormSelect
                        register={register}
                        name="todo_Channels_id"
                        label="ช่องทางรับปัญหา"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-3">
                    <FormInputDate
                        register={register}
                        name="todo_receive_date"
                        label="DATE START"
                        type="date"
                    />
                </div>
                <div className="col-span-3">
                    <FormInputDate
                        register={register}
                        name="todo_receive_time"
                        label="TIME START"
                        type="time"
                    />
                </div>
                <div className="col-span-3">
                    <FormInputDate
                        register={register}
                        name="todo_report_date"
                        label="DATE END"
                        type="date"
                    />
                </div>
                <div className="col-span-3">
                    <FormInputDate
                        register={register}
                        name="todo_report_time"
                        label="TIME END"
                        type="time"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="">
                    <TextArea
                        register={register}
                        name="todo_note_Troubleshoot"
                        label="วิธีแก้ไขปัญหา"
                    />
                </div>
                <FormFileInput
                    setValue={setValue}
                    name="todo_images"
                    label="เพิ่มรูปภาพ"

                />
            </div>
        </div>
    )
}

DetailModal.propTypes = {
    register: PropTypes.object.isRequired,
    setValue: PropTypes.func.isRequired,
};

export default DetailModal