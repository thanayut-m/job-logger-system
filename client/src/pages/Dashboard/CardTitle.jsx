import { TextField } from "@mui/material"
import MyDatePicker from "../../components/MyDatePicker"
import DropdownList from "../../components/DropdownList/DropdownList"
import Buttons from "../../components/Buttons"
import dayjs from "dayjs";
import { useState } from "react";
import { PropTypes } from 'prop-types';


const CardTitle = ({ handleOpen }) => {
    const [selectedValues, setSelectedValues] = useState(1);

    const menuOptions = [
        { value: 1, text: "ทั้งหมด" },
        { value: 2, text: "ชื่อทดสอบ-นามสกุลทดสอบ1" },
        { value: 3, text: "ชื่อทดสอบ-นามสกุลทดสอบ2" },
        { value: 4, text: "ชื่อทดสอบ-นามสกุลทดสอบ3" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-2xl p-3 grid grid-cols-6 gap-3 text-center ">

            <div>
                <p className="text-4xl font-semibold">To-Do List</p>
            </div>
            <div>
                <MyDatePicker
                    label="Start date"
                    defaultValue={dayjs().subtract(1, 'month')}
                />
            </div>
            <div >
                <MyDatePicker
                    label="End date"
                    defaultValue={dayjs()}
                />
            </div>
            <div className=" flex justify-end items-end">
                <TextField
                    id="outlined-basic"
                    label="Search..."
                    variant="outlined"
                    size="small"
                    className="w-full"
                />
            </div>
            <div className=" flex justify-end items-end">
                <DropdownList
                    label="Name"
                    options={menuOptions}
                    selectedValues={selectedValues}
                    setSelectedValues={setSelectedValues}
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