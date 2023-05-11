import React, {useEffect} from 'react';
import {AppRoutes} from "../utils/routes/AppRoutes";
import {Header} from "../features/header/Header";
import {Footer} from "../features/footer/Footer";
import {Sidebar} from '../features/sidebar/Sidebar';
import {useAppDispatch} from "../utils/hooks/hooks";
import {getAllCategoriesTC} from "../bll/reducers/categories-reducer";
import {getAllProductsTC} from "../bll/reducers/products-reducer";


export const App = () => {
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getAllCategoriesTC())
        dispatch(getAllProductsTC())
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
