
import DashboardModal from "./Modal/DashboardModal";

const CardTitleManageUser = () => {

    return (
        <div className="bg-white rounded-xl shadow-2xl p-3">
            <div className="flex justify-between" >
                <div> จัดการผู้ใช้งาน</div>
                <div className='bg-blue-500 hover:bg-blue-400 hover:text-white rounded-xl gap2 flex flex-row items-center'>
                    <DashboardModal
                        className="bg-blue-500 hover:bg-blue-400 hover:text-white"
                    >สร้างผู้ใช้งาน

                    </DashboardModal>
                </div>
            </div>
        </div>
    )
}
export default CardTitleManageUser