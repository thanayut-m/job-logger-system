import Buttons from "../../../../components/MUI/Buttons"
import PropTypes from 'prop-types';

const Footer_ChangeHospitals = ({
    onClick,
}) => {
    return (
        <Buttons
            variant="contained"
            onClick={onClick}
        >
            บันทึก
        </Buttons>
    )
}
Footer_ChangeHospitals.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Footer_ChangeHospitals