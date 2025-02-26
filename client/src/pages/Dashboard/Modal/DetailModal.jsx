import { useForm } from "react-hook-form";
import FormInput from "../../../components/FormInput";
import FormInputDate from "../../../components/FormInputDate";
import TextArea from "../../../components/TextArea"
import FormSelect from '../../../components/FormSelect';
import FormFileInput from "../../../components/FormFileInput";

const DetailModal = () => {
    const { register, handleSubmit } = useForm();


    const menuOptions = [
        { value: 1, text: "ทั้งหมด" },
        { value: 2, text: "ชื่อทดสอบ-นามสกุลทดสอบ1" },
        { value: 3, text: "ชื่อทดสอบ-นามสกุลทดสอบ2" },
        { value: 4, text: "ชื่อทดสอบ-นามสกุลทดสอบ3" },
    ];

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-row gap-2">

            <div className="grid grid-cols-12 gap-2 text-center">
                <div className="col-span-12 ">
                    <FormSelect
                        register={register}
                        name="T"
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
                        name="T"
                        label="ความเร่งด่วน"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FormSelect
                        register={register}
                        name="T"
                        label="ผู้รับผิดชอบ"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FormSelect
                        register={register}
                        name="T"
                        label="ช่วงเวลา"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FormSelect
                        register={register}
                        name="T"
                        label="หมวด"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-6 ">
                    <FormSelect
                        register={register}
                        name="T"
                        label="ช่องทางรับปัญหา"
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-3">
                    <FormInputDate
                        register={register}
                        name="T"
                        label="DATE START"
                        type="date"
                    />
                </div>
                <div className="col-span-3">
                    <FormInputDate
                        register={register}
                        name="T"
                        label="TIME START"
                        type="time"
                    />
                </div>
                <div className="col-span-3">
                    <FormInputDate
                        register={register}
                        name="T"
                        label="DATE END"
                        type="date"
                    />
                </div>
                <div className="col-span-3">
                    <FormInputDate
                        register={register}
                        name="T"
                        label="TIME END"
                        type="time"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <div className="">
                    <TextArea
                        register={register}
                        name="Ts"
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
        </form>
    )
}
export default DetailModal