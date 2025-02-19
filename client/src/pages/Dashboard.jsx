import dayjs from "dayjs";
import PrivateLayouts from "../Layouts/PrivateLayouts"
import MyDatePicker from "../components/MyDatePicker";
import { TextField } from "@mui/material";
import Buttons from './../components/Buttons';
import MultipleSelect from "../components/MultipleSelect";

const Dashboard = () => {

    const row = [
        { id: 1, hospital: 'โรงพยาบาลทดสอบ', status1: 'กำลังดำเนินการ', tat: 12, issueChannel: 'กลุ่มส้ม', problem: 'Canada', dateFound: '12/16/2020', dateResolved: '12/16/2020', responsible: 'ชื่อทดสอบ-นามสกุลทดสอบ', status: 'approve' },
    ]

    const limit = 10;

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
                        <div className="overflow-x-auto">
                            <table className="table table-xs">
                                <thead>
                                    <tr>
                                        <th>ลำดับ</th>
                                        <th>โรงพยาบาล/หน่วยงาน</th>
                                        <th>สถานะบริการ</th>
                                        <th>ช่องทางปัญหา</th>
                                        <th>TAT</th>
                                        <th>ปัญหาที่พบ </th>
                                        <th>วันที่-เวลาที่พบ </th>
                                        <th>วันที่-เวลาแก้ไขแล้วเสร็จ</th>
                                        <th>ผู้รับผิดชอบ</th>
                                        <th>สถานะ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {row.slice(0, limit).map((row, index) => {
                                        return (
                                            <tr key={index}>
                                                <th>{index + 1}</th>
                                                <td>{row.hospital}</td>
                                                <td>{row.status1}</td>
                                                <td>{row.issueChannel}</td>
                                                <td>{row.tat}</td>
                                                <td>{row.problem}</td>
                                                <td>{row.dateFound}</td>
                                                <td>{row.dateResolved}</td>
                                                <td>{row.responsible}</td>
                                                <td>{row.status}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </PrivateLayouts>
    )
}
export default Dashboard