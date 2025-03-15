import Modals from "../../../components/MUI/Modals"



const CardTitleManageUser = () => {

    return (
        <div className="bg-white rounded-xl shadow-2xl p-3">
            <div className="flex justify-between" >
                <div> จัดการผู้ใช้งาน</div>
                <div className='bg-blue-500 hover:bg-blue-400 hover:text-white rounded-xl gap2 flex flex-row items-center'>
                    <Modals
                        titleModal="asdasd"
                        detailModal="asdasd"
                        footerModal="asdsd"

                    >
                        test
                    </Modals>
                </div>
            </div>
        </div>
    )
}
export default CardTitleManageUser