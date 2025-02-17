import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import AppRouters from './routers/AppRouters';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AppRouters />
    </BrowserRouter>,
)
