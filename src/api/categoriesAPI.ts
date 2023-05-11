import {instance} from "./apiConfig/instance";
import {AllCategories, Category} from "./apiConfig/typesAPI/categoriesAPI-types";


export const categoriesAPI = {
    getAllCategories() {
        return instance.get<Category[]>(`/categories`)
    },

    getSingleCategory(id: number) {
        return instance.get<Category>(`/categories/${id}`)
    }
}