import {AxiosError} from "axios";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {AppThunkType} from "../store/store";

import {setAppStatusAC} from "./app-reducer";
import {productsAPI} from "../../api/productsAPI";

import {AppStatus} from "../../common/types/commonTypes";

import {baseErrorHandler} from "../../utils/error-utils/error-utils";
import {AllProductsType, ProductListType} from "../../api/apiConfig/typesAPI/productsAPI-types";


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


// ===== ThunkCreators ===== //
export const getAllProductsTC = (): AppThunkType => async (dispatch) => {
    dispatch(setAppStatusAC({status: AppStatus.LOADING}))
    try {
        const res = await productsAPI.getAllProducts()
        dispatch(setAllProductsAC({productsList: res.data}))
    } catch (e) {
        baseErrorHandler(e as Error | AxiosError, dispatch)
        dispatch(setAppStatusAC({status: AppStatus.FAILED}))
    }
}