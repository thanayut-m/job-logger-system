import { useForm } from "react-hook-form"
import CardDetailHospitals from "./CardDetailHospitals"
import CardTitleHospitals from "./CardTitleHospitals"
import { useCallback, useEffect, useState } from "react";
import { CreateHospitals, HospitalInfo } from "../../../functions/hospitals";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { HospitalsSchema } from "../../../utils/Schema";

const Hospitals = () => {
  const { register, watch, reset, handleSubmit, formState, setError } = useForm({
    resolver: zodResolver(HospitalsSchema),
  });

  const searchValue = watch("searchValue", "");
  const [hospitalInfo, setHospitalInfo] = useState([]);
  const [openModal, setOpenModal] = useState(null);


  const { errors } = formState
  console.log("errors:", errors);

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

  const handleOpen = (modal) => {
    setOpenModal(modal)
  }

  const handleClose = () => {
    setOpenModal(null)
  }

  const handleCreateHospitals = async (data) => {
    // console.log(`handleCreateHospitals : ${data}`)
    CreateHospitals(data, reset, handleClose, fetchDataHospital, setError)
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
        hospitalInfo={hospitalInfo}
      />
    </div>
  )
}
export default Hospitals
