import React, {useEffect} from 'react';
import {AppRoutes} from "../utils/routes/AppRoutes";
import {Header} from "../features/header/Header";
import {Footer} from "../features/footer/Footer";
import {Sidebar} from '../features/sidebar/Sidebar';
import {useAppDispatch} from "../utils/hooks/hooks";
import {getAllCategories} from "../bll/reducers/categories-reducer";
import {getAllProducts} from "../bll/reducers/products-reducer";


export const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllCategories())
        dispatch(getAllProducts())
    }, [dispatch])

    return (
        <div className="app">
            <Header/>

            <div className="container">
                <Sidebar/>
                <AppRoutes/>
            </div>

            <Footer/>
        </div>
    );
}
