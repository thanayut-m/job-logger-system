import Buttons from "../../components/Buttons"
import { PropTypes } from 'prop-types';
import FromInputDate from "../../components/FromInputDate";
import FormInput from "../../components/FormInput";
import { useForm } from "react-hook-form";
import FromSelect from "../../components/FromSelect";


const CardTitle = ({ handleOpen }) => {
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
                <FromInputDate
                    label="Start Date"
                    type="date"
                    subtract={{ value: 1, unit: "month" }}
                />
            </div>
            <div >
                <FromInputDate
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
            <div className=" flex justify-end items-end">
                <FromSelect
                    label="ผู้รับผิดชอบ"
                    options={menuOptions}
                />
            </div>
            <div className=" flex justify-end items-end">
                <Buttons
                    type="button"
                    text="เพิ่มข้อมูล"
                    onClick={handleOpen}
                />
            </div>
        </div>
    )
}

CardTitle.propTypes = {
    handleOpen: PropTypes.func.isRequired,
};
export default CardTitle