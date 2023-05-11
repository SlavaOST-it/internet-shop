import {AxiosError} from "axios";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {AppThunkType} from "../store/store";

import {setAppStatusAC} from "./app-reducer";
import {categoriesAPI} from "../../api/categoriesAPI";

import {AppStatus} from "../../common/types/commonTypes";
import {AllCategories, Category} from "../../api/apiConfig/typesAPI/categoriesAPI-types";

import {baseErrorHandler} from "../../utils/error-utils/error-utils";


const initialState: AllCategories = {
    list: []
};

export const slice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {
        setAllCategoriesAC(state, action: PayloadAction<{list: Category[]}>) {
            state.list = action.payload.list
        }
    }
});

export const categoriesReducer = slice.reducer;
export const {setAllCategoriesAC} = slice.actions;


// ===== ThunkCreators ===== //
export const getAllCategoriesTC = (): AppThunkType => async (dispatch) => {
    dispatch(setAppStatusAC({status: AppStatus.LOADING}))
    try {
        const res = await categoriesAPI.getAllCategories()
        dispatch(setAllCategoriesAC({list: res.data}))
    } catch (e) {
        baseErrorHandler(e as Error | AxiosError, dispatch)
        dispatch(setAppStatusAC({status: AppStatus.FAILED}))
    }
}