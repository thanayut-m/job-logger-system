import Input from "../../../../components/MUI/Input"
import Selects from "../../../../components/MUI/Selects"
import PropTypes from 'prop-types';

const Detail = ({
    register,
    menuItems
}) => {

    return (
        <div className="grid grid-cols-2 gap-3">
            <Input
                register={register}
                name="first_name"
                label="ชื่อ"
                type="text"
            />
            <Input
                register={register}
                name="last_name"
                label="นามสกุล"
                type="text"
            />
            <div className="grid col-span-2 gap-3">
                <Input
                    register={register}
                    name="username"
                    label="Username"
                    type="text"
                />
                <Selects
                    register={register}
                    name="status"
                    menuItems={menuItems}
                >
                    ตำแหน่ง
                </Selects>
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
};

export default Detail
