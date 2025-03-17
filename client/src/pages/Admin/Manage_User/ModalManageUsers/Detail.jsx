import Input from "../../../../components/MUI/Input"
import Selects from "../../../../components/MUI/Selects"
import PropTypes from 'prop-types';

const Detail = ({
    register,
    menuItems,
    row,
}) => {
    return (
        <div className="grid grid-cols-2 gap-3">
            <div className="grid col-span-2 gap-3">
                <Input
                    register={register}
                    name="username"
                    label="Username"
                    type="text"
                    defaultValue={row?.username || ""}
                    disabled
                />
            </div>
            <Input
                register={register}
                name="first_name"
                label="ชื่อ"
                type="text"
                defaultValue={row?.first_name || ""}
            />
            <Input
                register={register}
                name="last_name"
                label="นามสกุล"
                type="text"
                defaultValue={row?.last_name || ""}
            />
            <div className="grid col-span-2 gap-3">
                <Selects
                    register={register}
                    name="role"
                    menuItems={menuItems}
                    defaultValue={row?.role}
                >
                    ตำแหน่ง
                </Selects>
                <input type="hidden" value={row.user_id} {...register("user_id")} />
            </div>
        </div>
    )
}

Detail.propTypes = {
    register: PropTypes.func.isRequired,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    row: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        username: PropTypes.string,
        role: PropTypes.string,
        user_id: PropTypes.string,
    }),
    reset: PropTypes.func.isRequired,
};

export default Detail
