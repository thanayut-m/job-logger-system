import PrivateLayouts from "../Layouts/PrivateLayouts"

const Dashboard = () => {
    return (
        <PrivateLayouts>
            <div className="flex flex-col gap-3">
                <div className="bg-white rounded-xl shadow-2xl flex justify-between p-3">
                    <div >
                        Dashboard
                    </div>
                    <div className="flex gap-6" >
                        <div>ตั้งแต่</div>
                        <div>สิ้นสุด</div>
                        <div>ค้นหา</div>
                        <div>โรงพยาบาล</div>
                        <div></div>
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl">
                    <div className="p-3">
                        sadjkhfakjsdflkajs;dlfk';asdlkflhjasdifklk;m;lk
                    </div>
                </div>
            </div>
        </PrivateLayouts>
    )
}
export default Dashboard