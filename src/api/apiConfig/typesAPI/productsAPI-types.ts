import {Category} from "./categoriesAPI-types";


export type AllProductsType = {
    productsList: ProductListType[]
}
export type ProductListType = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: Category,
    "images": string[]
}