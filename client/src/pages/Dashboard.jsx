import dayjs from "dayjs";
import PrivateLayouts from "../Layouts/PrivateLayouts"
import MyDatePicker from "../components/MyDatePicker";
import { TextField } from "@mui/material";
import Buttons from './../components/Buttons';
import MultipleSelect from "../components/MultipleSelect";

const Dashboard = () => {
    return (
        <PrivateLayouts>
            <div className="flex flex-col gap-3">
                <div className="bg-white rounded-xl shadow-2xl p-3 grid grid-cols-6 gap-1 text-center ">
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
                        <MultipleSelect />
                    </div>
                    <div className=" flex justify-end items-end">
                        <Buttons
                            type="button"
                            text="เพิ่มข้อมูล"
                        />
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-3">
                        Dashboard
                    </div>
                </div>
            </div>
        </PrivateLayouts>
    )
}
export default Dashboard