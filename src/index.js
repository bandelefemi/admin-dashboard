import './index.css'
import App from "./App";
import React from "react";
import ReactDOM from 'react-dom/client'
import { registerLicense } from '@syncfusion/ej2-base';
import { ContextProvider } from './contexts/ContextProvider'

registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkNhX35WcX1WQ2FbVEY=');


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
)