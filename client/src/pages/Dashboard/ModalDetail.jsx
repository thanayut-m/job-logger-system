import { Typography } from "@mui/material"
import DropdownList from "../../components/DropdownList/DropdownList"
import { useState } from "react";
import MyDatePicker from "../../components/MyDatePicker";
import dayjs from "dayjs";

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
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12">
                    <DropdownList
                        textName="Hospital"
                        selectedValues={selectedValues}
                        setSelectedValues={setSelectedValues}
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-4">
                    <DropdownList
                        textName="หมวดงาน"
                        selectedValues={selectedValues}
                        setSelectedValues={setSelectedValues}
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-4">
                    <DropdownList
                        textName="ช่องทางรับปัญหา"
                        selectedValues={selectedValues}
                        setSelectedValues={setSelectedValues}
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-4">
                    <DropdownList
                        textName="ช่วงเวลา"
                        selectedValues={selectedValues}
                        setSelectedValues={setSelectedValues}
                        options={menuOptions}
                    />
                </div>
                <div className="col-span-3">
                    <MyDatePicker
                        label="start Date"
                        defaultValue={dayjs()}
                    />
                </div>
                <div className="col-span-3">
                    <MyDatePicker
                        label="start Time"
                        defaultValue={dayjs()}
                    />
                </div>
                <div className="col-span-3">
                    <MyDatePicker
                        label="End Date"
                        defaultValue={dayjs()}
                    />
                </div>
                <div className="col-span-3">
                    <MyDatePicker
                        label="End Time"
                        defaultValue={dayjs()}
                    />
                </div>
            </div>
        </Typography >
    )
}
export default ModalDetail