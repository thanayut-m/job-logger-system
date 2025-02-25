import { useState } from "react";
import PropTypes from 'prop-types';

const FromSelect = ({
    options,
    label
}) => {
    const [selectedValues, setSelectedValues] = useState(1);

    const handleChange = (e) => {
        setSelectedValues(Number(e.target.value));
    };

    return (
        <div>
            <label className="text-xs font-bold text-black">
                {label}
            </label>
            <select
                value={selectedValues}
                onChange={handleChange}
                className="select select-neutral"
            >
                {options.map((option) => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    );
                })}

            </select>
        </div >
    );
};

FromSelect.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
    label: PropTypes.string.isRequired,
}

export default FromSelect;
