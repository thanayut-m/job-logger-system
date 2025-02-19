import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const MultipleSelect = () => {
    const [name, setName] = React.useState(1);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className='w-full'>
            <FormControl size="small" sx={{ minWidth: '100%' }}>
                <InputLabel id="demo-controlled-open-select-label">Name</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={name}
                    label="Name"
                    onChange={handleChange}
                    className='text-start'
                >
                    <MenuItem value={1}>ทั้งหมด</MenuItem>
                    <MenuItem value={10}>ทดสอบ1</MenuItem>
                    <MenuItem value={20}>ทดสอบ2</MenuItem>
                    <MenuItem value={30}>ทดสอบ3</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
export default MultipleSelect