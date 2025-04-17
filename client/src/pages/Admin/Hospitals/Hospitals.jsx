import { useForm } from "react-hook-form"
import CardDetailHospitals from "./CardDetailHospitals"
import CardTitleHospitals from "./CardTitleHospitals"
import { useCallback, useEffect, useState } from "react";
import { HospitalInfo } from "../../../functions/hospitals";

const Hospitals = () => {
  const { register, watch } = useForm();
  const searchValue = watch("hospital_name", "");
  const [hospitalInfo, setHospitalInfo] = useState([]);

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

  return (
    <div className="flex flex-col gap-3">
      <CardTitleHospitals
        register={register}
        watch={watch}
      />
      <CardDetailHospitals
        hospitalInfo={hospitalInfo}
      />
    </div>
  )
}
export default Hospitals
