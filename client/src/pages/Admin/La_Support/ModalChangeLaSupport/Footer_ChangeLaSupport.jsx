import PropTypes from "prop-types"
import Buttons from "../../../../components/MUI/Buttons"

const Footer_ChangeLaSupport = ({
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

Footer_ChangeLaSupport.propTypes = {
    onClick: PropTypes.func.isRequired,
}
export default Footer_ChangeLaSupport