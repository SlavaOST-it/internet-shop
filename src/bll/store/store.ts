import {combineReducers} from "redux";
import createSagaMiddleware from "redux-saga";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'

import {appReducer} from "../reducers/app-reducer";
import {productsReducer, productsWatcherSaga} from "../reducers/products-reducer";
import {categoriesReducer, categoryWatcherSaga} from "../reducers/categories-reducer";

import {AppReducerActionTypes} from "../reducers/reducersTypes/appReducer-types";
import {ProductsReducerActionTypes} from "../reducers/reducersTypes/productsReducer-types";
import {CategoriesReducerActionTypes} from "../reducers/reducersTypes/categoriesReducer-types";



type ReduxActionType = AppReducerActionTypes | CategoriesReducerActionTypes | ProductsReducerActionTypes

const rootReducer = combineReducers({
    app: appReducer,
    products: productsReducer,
    categories: categoriesReducer,
})

// ============= SAGA ======================//
const sagaMiddleware = createSagaMiddleware()

function* rootWatcher() {
    yield categoryWatcherSaga()
    yield productsWatcherSaga()
}


// ============= Store ======================//
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware, sagaMiddleware)
})

// then run the saga
sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatchType = ThunkDispatch<RootState, unknown, ReduxActionType>

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ReduxActionType>
// @ts-ignore
window.store = store