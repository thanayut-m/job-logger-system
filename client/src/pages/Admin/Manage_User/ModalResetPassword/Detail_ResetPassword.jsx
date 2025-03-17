const Detail_ResetPassword = ({
    row,
    randomPassword,
    register
}) => {
    return (
        <div className="grid grid-cols-2">
            <div>
                Username :&nbsp;
                <label className="font-bold">{row?.username}</label>
            </div>
            <div>ชื่อ-สกุล :&nbsp;
                <label className="font-bold">{row?.first_name + " " + row?.last_name}</label>
            </div>
            <div className="col-span-2 text-center mt-2">
                <p className="text-2xl ">New Password</p>
            </div>
            <div className="col-span-2 text-center ">
                <p className="text-3xl font-semibold">{randomPassword}</p>
            </div>
            <input type="hidden" value={row.user_id} {...register("user_id")} />
            <input type="hidden" value={randomPassword} {...register("new_password")} />
        </div>
    )
}

export default Detail_ResetPassword