import {AxiosError, AxiosResponse} from "axios";
import {call, put, takeEvery} from 'redux-saga/effects'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
        setAllCategoriesAC(state, action: PayloadAction<{ list: Category[] }>) {
            state.list = action.payload.list
        }
    }
});

export const categoriesReducer = slice.reducer;
export const {setAllCategoriesAC} = slice.actions;



// ===== Sagas ===== //
function* getAllCategoriesSaga() {
    yield put(setAppStatusAC({status: AppStatus.LOADING}))
    try {
        const res: AxiosResponse<Category[]> = yield call (categoriesAPI.getAllCategories)
        yield put(setAllCategoriesAC({list: res.data}))
    } catch (e) {
        baseErrorHandler(e as Error | AxiosError)
        yield put(setAppStatusAC({status: AppStatus.FAILED}))
    }
}


export const getAllCategories = () => ({type: "CATEGORIES/GET_ALL_CATEGORIES"})

export function* categoryWatcherSaga () {
    yield takeEvery("CATEGORIES/GET_ALL_CATEGORIES", getAllCategoriesSaga)
}