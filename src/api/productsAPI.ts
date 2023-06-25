import {instance} from "./apiConfig/instance";
import {ProductListType} from "./apiConfig/typesAPI/productsAPI-types";
import {AxiosResponse} from "axios/index";


export const productsAPI = {
    getAllProducts(): Promise<AxiosResponse<ProductListType[]>> {
        return instance.get<ProductListType[]>(`/products`)
    },
}