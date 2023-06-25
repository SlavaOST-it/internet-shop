import {instance} from "./apiConfig/instance";
import {AllCategories, Category} from "./apiConfig/typesAPI/categoriesAPI-types";
import {AxiosResponse} from "axios";


export const categoriesAPI  = {
    getAllCategories(): Promise<AxiosResponse<Category[]>> {
        return instance.get<Category[]>(`/categories`)
    },

    getSingleCategory(id: number) {
        return instance.get<Category>(`/categories/${id}`)
    }
}