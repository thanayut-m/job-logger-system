import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Title from "./Title";
import Detail from "./Detail";
import Footer from "./Footer";
import Modals from '../../../../components/MUI/Modals';
import PropTypes from 'prop-types';

const ModalManageUsers = ({
    onClick,
    register,
    menuItems,
}) => {

    return (
        <div>
            <Modals
                variant="contained"
                backgroundColor="#FF9900"
                hoverBackgroundColor="#FF9999"
                moDalWidth="40%"
                titleModal={<Title />}
                detailModal={<Detail
                    menuItems={menuItems}
                    register={register}
                />}
                footerModal={<Footer
                    onClick={onClick}
                />}

            >
                <ManageAccountsIcon />
            </Modals>

        </div>
    )
}
ModalManageUsers.propTypes = {
    onClick: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ModalManageUsers