import Buttons from "../../../../components/MUI/Buttons"

const Footer_ChangeChannels = ({
    onClick
}) => {
    return (
        <div>
            <Buttons
                variant="contained"
                onClick={onClick}
            >
                บันทึก
            </Buttons>
        </div>
    )
}
export default Footer_ChangeChannels