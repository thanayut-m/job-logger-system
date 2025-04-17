
import { useForm } from "react-hook-form"
import CardDetailHospitals from "./CardDetailHospitals"
import CardTitleHospitals from "./CardTitleHospitals"

const Hospitals = () => {
  const { register } = useForm();

  
  return (
    <div className="flex flex-col gap-3">
      <CardTitleHospitals
        register={register}
      />
      <CardDetailHospitals />
    </div>
  )
}
export default Hospitals
