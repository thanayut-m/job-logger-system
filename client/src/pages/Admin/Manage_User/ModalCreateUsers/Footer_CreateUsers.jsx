import Buttons from "../../../../components/MUI/Buttons"

const Footer_CreateUsers = ({
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
export default Footer_CreateUsers