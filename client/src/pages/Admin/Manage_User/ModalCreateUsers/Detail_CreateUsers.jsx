import Input from "../../../../components/MUI/Input"
import Selects from "../../../../components/MUI/Selects"


const Detail_CreateUsers = ({
    menuItems,
    register
}) => {

    return (
        <div className="grid grid-cols-2 gap-3">
            <Input
                register={register}
                name="first_name"
                label="ชื่อ"
                type="text"
                variant="outlined"
            />
            <Input
                register={register}
                name="last_name"
                label="นามสกุล"
                type="text"
                variant="outlined"
            />
            <div className="grid col-span-2">
                <Input
                    register={register}
                    name="username"
                    label="ชื่อผู้ใช้"
                    type="text"
                    variant="outlined"
                />
            </div>
            <Input
                register={register}
                name="password"
                label="รหัสผ่าน"
                type="password"
                variant="outlined"
                autocomplete="new-password"
            />
            <Input
                register={register}
                name="password_confirmation"
                label="ยืนยันรหัสผ่าน"
                type="text"
                variant="outlined"
            />
            <div className="col-span-2">
                <Selects
                    register={register}
                    name="role"
                    menuItems={menuItems}
                    defaultValue="person"
                >
                    ตำแหน่ง
                </Selects>

            </div>
        </div >
    )
}
export default Detail_CreateUsers