import './index.css'
import App from "./App";
import React from "react";
import ReactDOM from 'react-dom/client'
import { registerLicense } from '@syncfusion/ej2-base';
import { ContextProvider } from './contexts/ContextProvider'

registerLicense('ORg4AjUWIQA/Gnt2V1hhQlJAfVddXGVWfFN0RnNedV94flFAcC0sT3RfQF5jTn9UdkJiUH1dcXZdRw==');


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
)