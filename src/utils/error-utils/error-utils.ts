import axios, {AxiosError} from "axios";
import {Dispatch} from "redux";


export const baseErrorHandler = (e: Error | AxiosError, dispatch: Dispatch) => {
    const err = e as Error | AxiosError
    if (axios.isAxiosError(err)) {
        const error = err.response?.data
            ? (err.response.data as ({ error: string })).error
            : err.message
        // dispatch(setAppStatusAC({status: AppStatus.FAILED}))
        // dispatch(setAppErrorAC({error: error}))
    }
}