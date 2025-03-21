import Buttons from './../../../../components/MUI/Buttons';

const Detail_ResetPassword = ({
    row = {},
    randomPassword,
    register,
    onClick
}) => {
    return (
        <div className="grid grid-rows-2 gap-9">
            <div className='grid grid-cols-2'>
                <div className='grid grid-cols-2'>
                    <p>
                        Username :&nbsp;
                        <label className="font-bold">{row?.username}</label>
                    </p>
                    <p>ชื่อ-สกุล :&nbsp;
                        <label className="font-bold">{row?.first_name + " " + row?.last_name}</label>
                    </p>
                </div>

                <div className="col-span-2 text-center mt-2">
                    <p className="text-2xl ">New Password</p>
                    <p className="text-3xl font-semibold text-red-400">{randomPassword}</p>
                </div>
                <input type="hidden" value={row.user_id} {...register("user_id")} />
                <input type="hidden" value={randomPassword} {...register("new_password")} />
            </div>
            <div className='grid'>
                <Buttons
                    variant="contained"
                    type="button"
                    backgroundColor="#FF9900"
                    hoverBackgroundColor="#FF9999"
                    onClick={onClick}
                    disabled={!randomPassword}
                >
                    Reset Password
                </Buttons>
            </div>
        </div>
    )
}

export default Detail_ResetPassword