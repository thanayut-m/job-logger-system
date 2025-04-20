import { useForm } from "react-hook-form"
import CardDetailHospitals from "./CardDetailHospitals"
import CardTitleHospitals from "./CardTitleHospitals"
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChangeHospitals, CreateHospitals, HandleStatusHospital, HospitalInfo } from "../../../functions/hospitals";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { HospitalsSchema } from "../../../utils/Schema";

const Hospitals = () => {
  const [hospitalInfo, setHospitalInfo] = useState([]);
  const [openModal, setOpenModal] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [oldName, setOldName] = useState("");

  const schema = useMemo(() => HospitalsSchema(oldName), [oldName]);

  const { register, watch, reset, handleSubmit, formState, setError } = useForm({
    resolver: zodResolver(schema),
  });

  const { errors } = formState

  const searchValue = watch("searchValue", "");

  const fetchDataHospital = useCallback(async () => {
    if (!searchValue.trim()) {
      HospitalInfo(setHospitalInfo, "")
    } else {
      HospitalInfo(setHospitalInfo, searchValue)
    }
  }, [searchValue]);

  useEffect(() => {
    fetchDataHospital();
  }, [fetchDataHospital])

  const handleOpen = (modal, user) => {
    setOpenModal(modal)
    setSelectedRow(user)
    setOldName(user.hospital_name);

    setTimeout(() => {
      reset({
        hospital_name: user.hospital_name,
        hospital_id: user.hospital_id,
      });
      setOpenModal(modal);
    }, 0);
  }

  const handleClose = () => {
    setOpenModal(null)
  }

  const handleCreateHospitals = async (data) => {
    CreateHospitals(data, reset, handleClose, fetchDataHospital, setError)
  }

  const handleChangeHospitals = async (data) => {
    ChangeHospitals(data, reset, handleClose, fetchDataHospital, setError)
  }

  const handleStatusHospital = async (data) => {
    HandleStatusHospital(data, fetchDataHospital)
  }

  return (
    <div className="flex flex-col gap-3">
      <CardTitleHospitals
        register={register}
        watch={watch}
        handleOpen={handleOpen}
        handleClose={handleClose}
        openModal={openModal}
        reset={reset}
        onClick={handleSubmit(handleCreateHospitals)}
        errors={errors}
      />
      <CardDetailHospitals
        register={register}
        hospitalInfo={hospitalInfo}
        handleOpen={handleOpen}
        handleClose={handleClose}
        openModal={openModal}
        selectedRow={selectedRow}
        reset={reset}
        errors={errors}
        handleStatusHospital={handleStatusHospital}
        handleChangeHospitals={handleChangeHospitals}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
export default Hospitals
