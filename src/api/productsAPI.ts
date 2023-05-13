import {instance} from "./apiConfig/instance";
import {ProductListType} from "./apiConfig/typesAPI/productsAPI-types";


export const productsAPI = {
    getAllProducts() {
        return instance.get<ProductListType[]>(`/products`)
    },
}