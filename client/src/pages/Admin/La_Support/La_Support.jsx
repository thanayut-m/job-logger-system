import CardDetailLaSupport from "./CardDetailLaSupport"
import CardTitleLaSupport from "./CardTitleLaSupport"

const La_Support = () => {
    return (
        <div className="flex flex-col gap-3">
            <CardTitleLaSupport />
            <CardDetailLaSupport />
        </div>
    )
}
export default La_Support