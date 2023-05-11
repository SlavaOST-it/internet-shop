import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from "../../features/main/homePage/HomePage";
import {PATH} from "./routes";
import {ProductsBlock} from "../../features/main/Products/ProductsBlock";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<HomePage/>}/>

        </Routes>
    );
};
