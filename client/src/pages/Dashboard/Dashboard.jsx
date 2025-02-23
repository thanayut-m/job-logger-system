
import PrivateLayouts from "../../Layouts/PrivateLayouts"
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import CardTitle from "./cardtitle";
import CardDetail from "./CardDetail";

const Dashboard = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <PrivateLayouts>
            <div className="flex flex-col gap-3">

                <CardTitle handleOpen={handleOpen} />

                <CardDetail />

            </div>
            {open && <Modal open={open} handleClose={handleClose} />}
        </PrivateLayouts>
    )
}
export default Dashboard