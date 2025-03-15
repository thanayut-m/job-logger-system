import Buttons from "../../../../components/MUI/Buttons"
import PropTypes from 'prop-types';

const Footer = ({
    onClick
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

Footer.propTypes = {
    onClick: PropTypes.func.isRequired,
};
export default Footer