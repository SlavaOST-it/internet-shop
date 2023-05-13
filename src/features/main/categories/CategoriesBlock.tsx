import React, {FC} from 'react';

import s from "./Categories.module.scss"
import {ProductListType} from "../../../api/apiConfig/typesAPI/productsAPI-types";
import {Link} from "react-router-dom";
import {Category} from "../../../api/apiConfig/typesAPI/categoriesAPI-types";


type CategoriesBlockType = {
    title: string
    categories: Category[]
    amount: number
}

export const CategoriesBlock: FC<CategoriesBlockType> = ({title, categories, amount}) => {
    const list = categories.filter((_, i) => i < amount)

    return (
        <section className={s.section}>
            <h3 className={s.title}>{title}</h3>

            <div className={s.list}>
                {list.map(el => (
                        <Link key={el.id}
                              to={`categories/${el.id}`}
                              className={s.item}
                        >
                            <div className={s.image}>
                                <img src={el.image} alt={"product"}/>
                            </div>

                            <h4 className={s.name}>{el.name}</h4>
                        </Link>
                    )
                )}
            </div>
        </section>
    );
};