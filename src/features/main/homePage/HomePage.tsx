import React from 'react';

import {Poster} from "../Poster/Poster";
import {ProductsBlock} from "../Products/ProductsBlock";

import {useAppSelector} from "../../../utils/hooks/hooks";
import {CategoriesBlock} from "../categories/CategoriesBlock";


export const HomePage = () => {
    const products = useAppSelector(state => state.products.productsList)
    const categories = useAppSelector(state => state.categories.list)

    return (
        <>
            <Poster/>
            <ProductsBlock products={products} title={"Trending"} amount={5}/>
            <CategoriesBlock categories={categories} title={"Worth seeing"} amount={5}/>
        </>
    );
};
