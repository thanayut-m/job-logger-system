import PropTypes from "prop-types";

const CardDetailManageUser = ({
    manageUserInfo
}) => {

    return (
        <div className="bg-white rounded-xl shadow-2xl p-3 grid grid-cols-6 gap-3 items-end ">
            <div className="flex flex-col">
                {manageUserInfo.length > 0 ? (
                    manageUserInfo.map((user, index) => (
                        <div key={index}>
                            {user.username}
                            {user.first_name}
                            {user.last_name}
                            {user.role}
                            {user.status}
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

CardDetailManageUser.propTypes = {
    manageUserInfo: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            first_name: PropTypes.string.isRequired,
            last_name: PropTypes.string.isRequired,
            role: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default CardDetailManageUser