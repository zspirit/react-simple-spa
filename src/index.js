import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route, 
} from "react-router-dom";

import HomePage from './Components/HomePage';
import App from './Components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<App/>} >
                <Route
                    index
                    element={<HomePage/>} />
                    <Route path="/HomePage" element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>);
