import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import PropTypes from 'prop-types';

const DropdownList = ({ selectedValues, setSelectedValues, options }) => {
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setSelectedValues(event.target.value);
    };



    return (
        <div className='w-full'>
            <FormControl size="small" sx={{ minWidth: '100%' }}>
                <InputLabel id="demo-controlled-open-select-label">Name</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    value={selectedValues}
                    label="Name"
                    onChange={handleChange}
                    className='text-start'
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

DropdownList.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
    selectedValues: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    setSelectedValues: PropTypes.func.isRequired,
};

export default DropdownList