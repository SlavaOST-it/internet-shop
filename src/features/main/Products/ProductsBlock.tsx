import React, {FC} from 'react';

import s from "./Products.module.scss"

import {ProductListType} from "../../../api/apiConfig/typesAPI/productsAPI-types";
import {ImageChecker} from "../../../utils/error-utils/imageChecker/ImageChecker";


type ProductsBlockType = {
    title: string
    products: ProductListType[]
    amount: number
}

export const ProductsBlock: FC<ProductsBlockType> = ({title, products, amount}) => {
    const list = products.filter((_, i) => i < amount)

    return (
        <div className={s.products}>
            <h3 className={s.title}>{title}</h3>

            <div className={s.productsList}>
                {list.map(el => <ProductItem key={el.id} item={el}/>)}
            </div>

            <button className={s.button}>See more</button>
        </div>
    );
};


type ProductItemType = {
    item: ProductListType
}
const ProductItem: FC<ProductItemType> = ({item}) => {
    return (
        <div key={item.id} className={s.productItem}>
            <div className={s.imageItem}>
                <ImageChecker src={item.images[0]} alt={"product"}/>
            </div>

            <div className={s.description}>
                <div className={s.text}>
                    <h4>{item.title}</h4>
                    <h5>{item.category.name}</h5>
                </div>

                <div className={s.pricesBlock}>
                    <div className={s.prices}>
                        <div className={s.price}>{item.price}$</div>
                        <div className={s.oldPrice}>{Math.floor(item.price * 0.8)}$</div>
                    </div>

                    <div className={s.purchased}>
                        {Math.floor(Math.random() * 20 + 1)} people <br/> purchased
                    </div>
                </div>
            </div>
        </div>
    )
}