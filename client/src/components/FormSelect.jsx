import PropTypes from "prop-types";

const FormSelect = ({ options, label, register, name }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="text-xs font-bold text-black text-start">
                {label}
            </label>
            <select {...register(name)} className="select select-neutral w-full mt-1">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    );
};

FormSelect.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
    label: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};

export default FormSelect;
