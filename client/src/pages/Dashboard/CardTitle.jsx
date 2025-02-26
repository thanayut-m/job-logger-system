import FormInputDate from "../../components/FormInputDate";
import FormInput from "../../components/FormInput";
import { useForm } from "react-hook-form";
import FormSelect from "../../components/FormSelect";
import DashboardModal from "./Modal/DashboardModal";


const CardTitle = () => {
    const { register } = useForm();

    const menuOptions = [
        { value: 1, text: "ทั้งหมด" },
        { value: 2, text: "ชื่อทดสอบ-นามสกุลทดสอบ1" },
        { value: 3, text: "ชื่อทดสอบ-นามสกุลทดสอบ2" },
        { value: 4, text: "ชื่อทดสอบ-นามสกุลทดสอบ3" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-2xl p-3 grid grid-cols-6 gap-3 items-end ">

            <div>
                <p className="text-4xl font-semibold text-center">To-Do List</p>
            </div>
            <div>
                <FormInputDate
                    register={register}
                    name="T"
                    label="Start Date"
                    type="date"
                // subtract={{ value: 1, unit: "month" }}
                />
            </div>
            <div >
                <FormInputDate
                    register={register}
                    name="T"
                    label="End Date"
                    type="date"
                />
            </div>
            <div>
                <FormInput
                    label="Search"
                    register={register}
                    name="search"
                    type="search"
                    placeholder="Search..."
                />
            </div>
            <div className="items-end">
                <FormSelect
                    register={register}
                    name="T"
                    label="ผู้รับผิดชอบ"
                    options={menuOptions}
                />
            </div>
            <div className=" flex justify-end items-end">
                <DashboardModal />
            </div>
        </div>
    )
}
export default CardTitle