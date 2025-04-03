import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

const Selects = ({
    children,
    menuItems,
    register,
    name,
    id,
    defaultValue,
    disabled
}) => {
    return (
        <Box sx={{ minWidth: "120" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{children}</InputLabel>
                <Select
                    {...register(name)}
                    id={id || name}
                    labelId="demo-simple-select-label"
                    defaultValue={defaultValue}
                    label={children}
                    disabled={disabled}
                >
                    {menuItems.map((items) => (
                        <MenuItem key={items.value} value={items.value}>
                            {items.name}
                        </MenuItem>
                    ))}

                </Select>
            </FormControl>
        </Box>
    )
}

Selects.propTypes = {
    children: PropTypes.node.isRequired,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    register: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    defaultValue: PropTypes.string,
};
export default Selects