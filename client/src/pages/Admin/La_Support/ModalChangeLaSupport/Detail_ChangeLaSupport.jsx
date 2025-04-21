import Input from "../../../../components/MUI/Input"
import PropTypes from 'prop-types';

const Detail_ChangeLaSupport = ({
    register,
    errors,
    row,
}) => {
    return (
        <div className="grid grid-rows-1" >
            <Input
                register={register}
                name="la_support_name"
                label="ชื่อหมวดหมู่"
                errors={errors}
                defaultValue={row.todo_la_Support_name || ""}

            />
            <input
                type="hidden"
                value={row.todo_la_Support_id}
                {...register("la_support_id")} />
            <input
                type="hidden"
                value={row.todo_la_Support_status}
                {...register("la_support_status")}
            />
        </div>
    )
}

Detail_ChangeLaSupport.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object,
    row: PropTypes.shape({
        todo_la_Support_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        todo_la_Support_name: PropTypes.string,
        todo_la_Support_status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired,
};

export default Detail_ChangeLaSupport