import Buttons from "../../../../components/MUI/Buttons"
import PropTypes from 'prop-types';

const Footer_CreateHospitals = ({
    onClick
}) => {
    return (
        <Buttons
            variant="contained"
            onClick={onClick}
        >
            อัพเดท
        </Buttons>
    )
}
Footer_CreateHospitals.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Footer_CreateHospitals