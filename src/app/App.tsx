import React from 'react';
import s from "./App.module.scss";
import {AppRoutes} from "../utils/routes/AppRoutes";
import {Header} from "../features/header/Header";
import {Footer} from "../features/footer/Footer";
import {Sidebar} from '../features/sidebar/Sidebar';


export const App = () => {
    return (
        <div className={s.app}>
            <Header/>

            <div className={s.container}>
                <Sidebar/>
                <AppRoutes/>
            </div>

            <Footer/>
        </div>

    );
}
