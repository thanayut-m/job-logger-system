import dayjs from "dayjs";
import PropTypes from "prop-types";

const FormInputDate = ({ label, type, subtract, register, name }) => {
    const subtractValue = subtract?.value || 0;
    const subtractUnit = subtract?.unit || "day";

    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="text-xs font-bold text-black text-start">
                {label}
            </label>
            <input
                ref={register(name).ref}
                {...register(name)}
                type={type}
                className="input input-neutral mt-1 w-full"
                defaultValue={dayjs().subtract(subtractValue, subtractUnit).format("YYYY-MM-DD")}
            />
        </div>
    );
};

FormInputDate.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    subtract: PropTypes.shape({
        value: PropTypes.number,
        unit: PropTypes.string,
    }),
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

FormInputDate.defaultProps = {
    type: "date",
    subtract: { value: 0, unit: "day" },
};

export default FormInputDate;
