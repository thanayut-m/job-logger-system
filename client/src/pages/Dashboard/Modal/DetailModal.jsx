import { useForm } from "react-hook-form";
import FormInput from "../../../components/FormInput";
import FormInputDate from "../../../components/FormInputDate";
import TextArea from "../../../components/TextArea"
import FormSelect from '../../../components/FormSelect';
import FormFileInput from "../../../components/FormFileInput";

const DetailModal = () => {
    const { register } = useForm();

    const menuOptions = [
        { value: 1, text: "ทั้งหมด" },
        { value: 2, text: "ชื่อทดสอบ-นามสกุลทดสอบ1" },
        { value: 3, text: "ชื่อทดสอบ-นามสกุลทดสอบ2" },
        { value: 4, text: "ชื่อทดสอบ-นามสกุลทดสอบ3" },
    ];

    return (
        <div className="grid grid-row gap-2">

            <div className="grid grid-cols-12 gap-2 text-center">
                <div className="col-span-12 ">
                    <FormSelect
                        label="โรงพยาบาล"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-10">
                    <FormInput
                        label="ปัญหา"
                        register={register}
                        name="todo_note_request"
                        type="input"
                    />
                </div>
                <div className="col-span-2 ">
                    <FormSelect
                        label="ความเร่งด่วน"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FormSelect
                        label="ผู้รับผิดชอบ"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FormSelect
                        label="ช่วงเวลา"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FormSelect
                        label="หมวด"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FormSelect
                        label="ช่องทางรับปัญหา"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-3">
                    <FormInputDate
                        label="DATE START"
                        type="date"
                    />
                </div>
                <div className="col-span-3">
                    <FormInputDate
                        label="TIME START"
                        type="time"
                    />
                </div>
                <div className="col-span-3">
                    <FormInputDate
                        label="DATE END"
                        type="date"
                    />
                </div>
                <div className="col-span-3">
                    <FormInputDate
                        label="TIME END"
                        type="time"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="">
                    <TextArea
                        label="วิธีแก้ไขปัญหา"
                    />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-amber-300">
                        <FormFileInput />
                    </div>
                    <div>view image</div>
                </div>
            </div>
        </div>
    )
}
export default DetailModal