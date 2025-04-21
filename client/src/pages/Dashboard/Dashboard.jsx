
import CardTitle from "./CardTitle";
import CardDetailDashboard from "./CardDetailDashboard";
import CardTitleDashboard from "./CardTitleDashboard";

const Dashboard = () => {

    return (
        <div className="flex flex-col gap-3">
            <CardTitle />
            <CardTitleDashboard />
            <CardDetailDashboard />
        </div>
    )
}
export default Dashboard