import Input from "../../../../components/MUI/Input"

const Detail_ChangeChannels = ({
    register,
    errors,
    row
}) => {
    return (
        <div className="grid grid-rows-1" >
            <Input
                register={register}
                name="channel_name"
                label="ช่องทางติดต่อ"
                errors={errors}
                defaultValue={row.todo_Channels_name || ""}
            />
            <input type="hidden" value={row.todo_Channels_id} {...register("channel_id")} />\
            <input type="hidden" value={row.todo_Channels_status} {...register("channel_status")} />
        </div>
    )
}
export default Detail_ChangeChannels