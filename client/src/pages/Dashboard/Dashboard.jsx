
import PrivateLayouts from "../../Layouts/PrivateLayouts"
import CardTitle from "./CardTitle";
import CardDetail from "./CardDetail";

const Dashboard = () => {

    return (
        <PrivateLayouts>
            <div className="flex flex-col gap-3">
                <CardTitle />
                <CardDetail />

            </div>
        </PrivateLayouts>
    )
}
export default Dashboard