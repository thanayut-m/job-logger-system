import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';

function MyDatePicker({
    label,
    defaultValue
}) {

    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        label={label}
                        defaultValue={defaultValue ? dayjs(defaultValue) : dayjs()}
                        format="DD/MM/YYYY"
                        slotProps={{ textField: { size: 'small' } }}

                        className="w-full"
                    />
                </DemoContainer>
            </LocalizationProvider>
        </div>

    );
}
MyDatePicker.propTypes = {
    label: PropTypes.string.isRequired,
    defaultValue: PropTypes.string,
}

MyDatePicker.defaultProps = {
    defaultValue: dayjs().format('DD-MM-YYYY'),
}

export default MyDatePicker;
