import PropTypes from "prop-types"
import Buttons from "../../../../components/MUI/Buttons"

const Footer_CreateLaSupport = ({
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

Footer_CreateLaSupport.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Footer_CreateLaSupport