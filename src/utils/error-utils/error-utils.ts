import axios, {AxiosError} from "axios";
import {put} from "redux-saga/effects";

import {AppStatus} from "../../common/types/commonTypes";
import {setAppErrorAC, setAppStatusAC} from "../../bll/reducers/app-reducer";


export function* baseErrorHandler(e: Error | AxiosError) {
    const err = e as Error | AxiosError
    if (axios.isAxiosError(err)) {
        const error = err.response?.data
            ? (err.response.data as ({ error: string })).error
            : err.message
        yield put(setAppStatusAC({status: AppStatus.FAILED}))
        yield put(setAppErrorAC({error: error}))
    }
}