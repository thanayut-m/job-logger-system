import { useForm } from "react-hook-form";
import CardDetailChannels from "./CardDetailChannels"
import CardTitleChannels from "./CardTitleChannels"
import { useState } from "react";
import { CreateChannel } from "../../../functions/channels";
import { ChannelSchema } from "../../../utils/Schema";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

const Channels = () => {
    const [openModal, setOpenModal] = useState(null);

    const { register, watch, reset, handleSubmit, formState, setError } = useForm({
        resolver: zodResolver(ChannelSchema),
    });

    const { errors } = formState

    const handleOpen = (modal) => {
        setOpenModal(modal)
    }

    const handleClose = () => {
        setOpenModal(null)
    }

    const handleCreateChannel = async (data) => {
        CreateChannel(data, reset, handleClose, setError)
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
            <CardDetailChannels />
        </div>
    )
}
export default Channels