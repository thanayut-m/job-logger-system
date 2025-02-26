import dayjs from "dayjs";
import PropTypes from "prop-types";

const FormInputDate = ({ label, type, subtract }) => {
    const subtractValue = subtract ? subtract.value : 0;
    const subtractUnit = subtract ? subtract.unit : 'day';

    return (
        <div className="flex flex-col">
            <label className="text-xs font-bold text-black text-start">
                {label}
            </label>
            <input
                type={type}
                className="input input-neutral mt-1 w-full"
                defaultValue={dayjs().subtract(subtractValue, subtractUnit).format("YYYY-MM-DD")}
            />
        </div>
    );
};

FormInputDate.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    subtract: PropTypes.shape({
        value: PropTypes.number,
        unit: PropTypes.string,
    }),
};

FormInputDate.defaultProps = {
    subtract: { value: 0, unit: "day" },
};

export default FormInputDate;
