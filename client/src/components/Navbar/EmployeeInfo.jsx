import PropTypes from 'prop-types';

const EmployeeInfo = ({
    fullname,
    role
}) => {

    return (
        <div className="flex flex-col items-end">
            <div>{fullname}</div>
            <p className="text-xs font-bold">ตำแหน่ง {role}</p>
        </div>
    )
}

EmployeeInfo.propTypes = {
    fullname: PropTypes.string.isRequired,
    role: PropTypes.string,
}

EmployeeInfo.defaultProps = {
    role: null,
}

export default EmployeeInfo