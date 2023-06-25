import {getAllCategories, setAllCategoriesAC} from "../categories-reducer";


// ===== Action Types ===== //
type SetAllCategoriesAT = ReturnType<typeof setAllCategoriesAC>


// ===== Action Types for Sagas ===== //
type getAllCategoriesAT = ReturnType<typeof getAllCategories>


// =====   ===== //
export type CategoriesReducerActionTypes = SetAllCategoriesAT | getAllCategoriesAT