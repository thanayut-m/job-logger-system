import { useForm } from "react-hook-form";
import FormInput from "../../../components/FormInput";
import FromInputDate from "../../../components/FromInputDate";
import TextArea from "../../../components/TextArea"
import FromSelect from './../../../components/FromSelect';

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
                    <FromSelect
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
                    <FromSelect
                        label="ความเร่งด่วน"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FromSelect
                        label="ผู้รับผิดชอบ"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FromSelect
                        label="ช่วงเวลา"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FromSelect
                        label="หมวด"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FromSelect
                        label="ช่องทางรับปัญหา"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-3">
                    <FromInputDate
                        label="DATE START"
                        type="date"
                    />
                </div>
                <div className="col-span-3">
                    <FromInputDate
                        label="TIME START"
                        type="time"
                    />
                </div>
                <div className="col-span-3">
                    <FromInputDate
                        label="DATE END"
                        type="date"
                    />
                </div>
                <div className="col-span-3">
                    <FromInputDate
                        label="TIME END"
                        type="time"
                    />
                </div>
            </div>
            <div className="">
                <TextArea
                    label="วิธีแก้ไขปัญหา"
                />
            </div>
        </div>
    )
}
export default DetailModal