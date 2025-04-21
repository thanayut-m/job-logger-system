import { useForm } from "react-hook-form";
import CardDetailLaSupport from "./CardDetailLaSupport"
import CardTitleLaSupport from "./CardTitleLaSupport"
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChangeLaSupport, CreateLaSupport, StatusLaSupport, SupportLaInfo } from "../../../functions/la_support";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { LaSupportSchema } from "../../../utils/Schema";

const La_Support = () => {
    const [supportLaInfo, setSupportLaInfo] = useState([]);
    const [openModal, setOpenModal] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [oldName, setOldName] = useState("");

    const schema = useMemo(() => LaSupportSchema(oldName), [oldName]);

    const { register, watch, reset, handleSubmit, formState, setError } = useForm({
        resolver: zodResolver(schema)
    });

    const { errors } = formState

    const searchValue = watch("searchValue", "");

    const fetchDataLaSupport = useCallback(async () => {
        if (!searchValue.trim()) {
            SupportLaInfo(setSupportLaInfo, "");
        } else {
            SupportLaInfo(setSupportLaInfo, searchValue)
        }
    }, [searchValue]);

    useEffect(() => {
        fetchDataLaSupport();
    }, [fetchDataLaSupport])

    const handleOpen = (modal, user) => {
        setOpenModal(modal)
        setSelectedRow(user)
        setOldName(user.todo_la_Support_name);

        setTimeout(() => {
            reset({
                la_support_name: user.todo_la_Support_name,
                la_support_id: user.todo_la_Support_id,
            });
            setOpenModal(modal);
        }, 0);
    }

    const handleClose = () => {
        setOpenModal(null)
        setSelectedRow(null)
    }

    const handleCreateLaSupport = async (data) => {
        CreateLaSupport(data, handleClose, reset, setError);
    }

    const handleStatusLaSupport = async (data) => {
        StatusLaSupport(data, fetchDataLaSupport)
    }

    const handleChangeLaSupport = async (data) => {
        ChangeLaSupport(data, reset, handleClose, fetchDataLaSupport, setError)
    }

    return (
        <div className="flex flex-col gap-3">
            <CardTitleLaSupport
                register={register}
                watch={watch}
                handleOpen={handleOpen}
                handleClose={handleClose}
                openModal={openModal}
                reset={reset}
                onClick={handleSubmit(handleCreateLaSupport)}
                errors={errors}
            />
            <CardDetailLaSupport
                register={register}
                openModal={openModal}
                handleOpen={handleOpen}
                handleClose={handleClose}
                reset={reset}
                errors={errors}
                handleSubmit={handleSubmit}
                supportLaInfo={supportLaInfo}
                handleStatusLaSupport={handleStatusLaSupport}
                handleChangeLaSupport={handleChangeLaSupport}
                selectedRow={selectedRow}
            />
        </div>
    )
}
export default La_Support