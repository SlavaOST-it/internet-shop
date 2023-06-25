import {AxiosError, AxiosResponse} from "axios";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {setAppStatusAC} from "./app-reducer";
import {productsAPI} from "../../api/productsAPI";

import {AppStatus} from "../../common/types/commonTypes";

import {baseErrorHandler} from "../../utils/error-utils/error-utils";
import {AllProductsType, ProductListType} from "../../api/apiConfig/typesAPI/productsAPI-types";
import {call, put, takeEvery} from "redux-saga/effects";


const initialState: AllProductsType = {
    productsList: []
};

export const slice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        setAllProductsAC(state, action: PayloadAction<{ productsList: ProductListType[] }>) {
            state.productsList = action.payload.productsList
        }
    }
});

export const productsReducer = slice.reducer;
export const {setAllProductsAC} = slice.actions;


// ===== Sagas ===== //
function* getAllProductsSaga(){
    yield put(setAppStatusAC({status: AppStatus.LOADING}))
    try {
        const res:AxiosResponse<ProductListType[]> = yield call (productsAPI.getAllProducts)
        yield put(setAllProductsAC({productsList: res.data}))
    } catch (e) {
        baseErrorHandler(e as Error | AxiosError)
        yield put(setAppStatusAC({status: AppStatus.FAILED}))
    }
}

export const getAllProducts = () => ({type: "PRODUCTS/GET_ALL_PRODUCTS"})

export function* productsWatcherSaga () {
    yield takeEvery("PRODUCTS/GET_ALL_PRODUCTS", getAllProductsSaga)
}