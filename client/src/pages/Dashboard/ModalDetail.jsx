import { Typography } from "@mui/material"
import DropdownList from "../../components/DropdownList/DropdownList"
import { useState } from "react";
import MyDatePicker from "../../components/MyDatePicker";
import dayjs from "dayjs";
import TextareaAutosizes from "../../components/TextareaAutosize";

const ModalDetail = () => {
    const [selectedValues, setSelectedValues] = useState(1);

    const menuOptions = [
        { value: 1, text: "โรงพยาบาลทกสอบ 1" },
        { value: 2, text: "โรงพยาบาลทกสอบ 2" },
        { value: 3, text: "โรงพยาบาลทกสอบ 3" },
        { value: 4, text: "โรงพยาบาลทกสอบ 4" },
    ];

    return (
        <Typography variant="body1"
            sx={{
                marginTop: '10px'
            }}>
            <div className="">
                <DropdownList
                    textName="Hospital"
                    selectedValues={selectedValues}
                    setSelectedValues={setSelectedValues}
                    options={menuOptions}
                />
                <DropdownList
                    textName="หมวดงาน"
                    selectedValues={selectedValues}
                    setSelectedValues={setSelectedValues}
                    options={menuOptions}
                />
                <DropdownList
                    textName="ช่องทางรับปัญหา"
                    selectedValues={selectedValues}
                    setSelectedValues={setSelectedValues}
                    options={menuOptions}
                />
                <DropdownList
                    textName="ช่วงเวลา"
                    selectedValues={selectedValues}
                    setSelectedValues={setSelectedValues}
                    options={menuOptions}
                />
                <MyDatePicker
                    label="start Date"
                    defaultValue={dayjs()}
                />
                <MyDatePicker
                    label="End Date"
                    defaultValue={dayjs()}
                />
                <TextareaAutosizes aria-label="empty textarea" placeholder="Empty" />
                <TextareaAutosizes aria-label="empty textarea" placeholder="Empty" />
            </div>
        </Typography >
    )
}
export default ModalDetail