import { useForm } from "react-hook-form";
import CardDetailChannels from "./CardDetailChannels"
import CardTitleChannels from "./CardTitleChannels"
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChangeChannel, ChannelInfo, CreateChannel, HandleStatusChannel } from "../../../functions/channels";
import { ChannelSchema } from "../../../utils/Schema";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

const Channels = () => {
    const [openModal, setOpenModal] = useState(null);
    const [channelInfo, setChannelInfo] = useState([])
    const [selectedRow, setSelectedRow] = useState(null);
    const [oldName, setOldName] = useState("");

    const schema = useMemo(() => ChannelSchema(oldName), [oldName]);

    const { register, watch, reset, handleSubmit, formState, setError } = useForm({
        resolver: zodResolver(schema),
    });

    const { errors } = formState

    const handleOpen = (modal, user) => {
        setSelectedRow(user)
        setOpenModal(modal)
        setOldName(user.todo_Channels_name);

        setTimeout(() => {
            reset({
                channel_name: user.todo_Channels_name,
                channel_id: user.todo_Channels_id,
            });
            setOpenModal(modal);
        }, 0);
    }

    const handleClose = () => {
        setOpenModal(null)
    }

    const searchValue = watch("searchValue", "");

    const fetchDataChannel = useCallback(async () => {
        if (!searchValue.trim()) {
            ChannelInfo(setChannelInfo, "")
        } else {
            ChannelInfo(setChannelInfo, searchValue)
        }
    }, [searchValue])

    useEffect(() => {
        fetchDataChannel();
    }, [fetchDataChannel])

    const handleCreateChannel = async (data) => {
        CreateChannel(data, reset, handleClose, setError)
    }

    const handleStatusChannel = async (data) => {
        HandleStatusChannel(data, fetchDataChannel)
    }

    const handleChangeChannel = async (data) => {
        ChangeChannel(data, reset, handleClose, fetchDataChannel, setError)
    }


    return (
        <div className="flex flex-col gap-3">
            <CardTitleChannels
                register={register}
                errors={errors}
                reset={reset}
                watch={watch}
                handleSubmit={handleSubmit}
                handleCreateChannel={handleCreateChannel}
                openModal={openModal}
                handleOpen={handleOpen}
                handleClose={handleClose}
            />
            <CardDetailChannels
                channelInfo={channelInfo}
                register={register}
                handleSubmit={handleSubmit}
                handleStatusChannel={handleStatusChannel}
                handleChangeChannel={handleChangeChannel}
                handleOpen={handleOpen}
                handleClose={handleClose}
                openModal={openModal}
                reset={reset}
                errors={errors}
                selectedRow={selectedRow}
            />
        </div>
    )
}
export default Channels