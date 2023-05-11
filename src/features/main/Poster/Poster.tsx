import React from 'react';

import s from "./Poster.module.scss"

import homeImg from "../../../assets/image/homeImg.png"


export const Poster = () => {
    return (
        <section className={s.poster}>
            <h2 className={s.title}>BIG SALE 20%</h2>

            <div className={s.product}>
                <div className={s.description}>
                    <h3 className={s.subTitle}> THE BESTSELLER OF 2023</h3>
                    <p className={s.text}>
                        LENNON r2d2 <br/>
                        with NVIDIA 5090 TI
                    </p>

                    <button>Shop Now</button>
                </div>

                <div className={s.image}>
                    <img src={homeImg} alt={"best product"}/>
                </div>
            </div>
        </section>
    );
};
