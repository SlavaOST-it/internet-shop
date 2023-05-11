import React from 'react';
import {Link} from "react-router-dom";

import s from "./Footer.module.scss"

import {PATH} from "../../utils/routes/routes";

import logo from "../../assets/image/logo/LOGO_1.svg"
import youtube from "../../assets/image/icons/youtube.svg"
import facebook from "../../assets/image/icons/facebook.svg"
import instagram from "../../assets/image/icons/instagram.svg"


export const Footer = () => {
    const linkLogo = [
        {id: 1, name: "youtube", img: youtube, link: "https://www.youtube.com/"},
        {id: 2, name: "facebook", img: facebook, link: "https://www.facebook.com/"},
        {id: 3, name: "instagram", img: instagram, link: "https://www.instagram.com/"},
    ]

    return (
        <div className={s.footer}>
            <section className={s.logo}>
                <Link to={PATH.home}>
                    <img src={logo} alt={"stuff"}/>
                </Link>
            </section>

            <div className={s.rights}>
                Developed by&nbsp;
                <a
                    href={"https://github.com/SlavaOST-it"}
                    target={"_blank"}
                    rel={"noreferrer"}
                >
                     SlavaOST
                </a>
            </div>

            <div className={s.social_links}>
                {linkLogo.map(el =>
                    <a key={el.id} href={el.link}  target="_blank" rel="noreferrer">
                        <img className={s.logo} src={el.img} alt={el.name}/>
                    </a>
                )}

            </div>
        </div>
    );
};

