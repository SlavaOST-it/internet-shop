import React from 'react';

import s from "./Sidebar.module.scss"
import {useAppDispatch, useAppSelector} from "../../utils/hooks/hooks";
import {NavLink} from "react-router-dom";


export const Sidebar = () => {
    const dispatch = useAppDispatch()
    const categories = useAppSelector(state => state.categories.list)


    const changeCategory = (id: number) => {
        // dispatch()
    }

    return (
        <section className={s.sidebar}>
            <div className={s.title}>CATEGORIES</div>

            <nav>
                <ul className={s.menu}>
                    {categories.map(el => (
                        <li key={el.id} className={s.link}>
                            <NavLink
                                to={`/categories/${el.id}`}
                                onClick={()=>changeCategory(el.id)}
                                className={({isActive}) => isActive ? s.activeLink : s.link}
                            >
                                {el.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={s.footer}>
                <a
                    href={"/help"}
                    className={s.link}
                    target={"_blank"}
                    rel="noreferrer"
                >
                    Help
                </a>

                <a
                    href={"/terms"}
                    className={s.link}
                    target={"_blank"}
                    rel="noreferrer"
                    style={{textDecoration: "underline"}}
                >
                    Terms & Conditions
                </a>
            </div>
        </section>
    );
};
