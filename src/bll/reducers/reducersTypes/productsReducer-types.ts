import {getAllProducts, setAllProductsAC} from "../products-reducer";



// ===== Action Types ==== //
type SetAllProductsAT = ReturnType<typeof setAllProductsAC>


// ===== Action Types for Sagas ===== //
type getAllProductsAT = ReturnType<typeof getAllProducts>


// =====   ===== //
export type ProductsReducerActionTypes = SetAllProductsAT | getAllProductsAT