import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'

import {appReducer} from "../reducers/app-reducer";
import {productsReducer} from "../reducers/products-reducer";
import {categoriesReducer} from "../reducers/categories-reducer";

import {AppReducerActionTypes} from "../reducers/reducersTypes/appReducer-types";
import {ProductsReducerActionTypes} from "../reducers/reducersTypes/productsReducer-types";
import {CategoriesReducerActionTypes} from "../reducers/reducersTypes/categoriesReducer-types";


const rootReducer = combineReducers({
    app: appReducer,
    products: productsReducer,
    categories: categoriesReducer,
})

type ReduxActionType = AppReducerActionTypes | CategoriesReducerActionTypes | ProductsReducerActionTypes


export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatchType = ThunkDispatch<RootState, unknown, ReduxActionType>

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ReduxActionType>
// @ts-ignore
window.store = store