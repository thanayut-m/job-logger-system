import PropTypes from "prop-types"
import Buttons from "../../../../components/MUI/Buttons"

const Footer_CreateChannels = ({
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
Footer_CreateChannels.propTypes = {
    onClick: PropTypes.func.isRequired,
}
export default Footer_CreateChannels