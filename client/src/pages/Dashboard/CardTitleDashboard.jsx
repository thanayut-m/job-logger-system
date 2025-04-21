import Buttons from "../../components/MUI/Buttons"

const CardTitleDashboard = () => {
    return (
        <div className="bg-white rounded-xl shadow-2xl p-3">
            <div className="grid grid-cols-6 gap-3 ">
                <div className="flex flex-row items-center justify-center">
                    <label className="text-3xl font-semibold">To-Do List</label>
                </div>
                <div className="bg-amber-300">
                    <Buttons
                        variant="contained"
                        backgroundColor="#FF9900"
                        hoverBackgroundColor="#FF9999"
                    >
                        เพิ่มหมวดหมู่
                    </Buttons>
                </div>
                <div>
                    <Buttons
                        variant="contained"
                        backgroundColor="#FF9900"
                        hoverBackgroundColor="#FF9999"
                    >
                        เพิ่มหมวดหมู่
                    </Buttons>
                </div>
                <div>
                    <Buttons
                        variant="contained"
                        backgroundColor="#FF9900"
                        hoverBackgroundColor="#FF9999"
                    >
                        เพิ่มหมวดหมู่
                    </Buttons>
                </div>
                <div>
                    <Buttons
                        variant="contained"
                        backgroundColor="#FF9900"
                        hoverBackgroundColor="#FF9999"
                    >
                        เพิ่มหมวดหมู่
                    </Buttons>
                </div>
                <div>
                    <Buttons
                        variant="contained"
                        backgroundColor="#FF9900"
                        hoverBackgroundColor="#FF9999"
                        minWidth="100%"
                    >
                        เพิ่มหมวดหมู่
                    </Buttons>
                </div>

            </div>

        </div>
    )
}
export default CardTitleDashboard