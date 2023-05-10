import React from 'react';
import {Link} from "react-router-dom";

import s from "./Header.module.scss"

import {PATH} from "../../utils/routes/routes";

import logo from "../../assets/image/logo/LOGO_1.svg"
import cartIcon from "../../assets/image/icons/BagIcon.png"
import searchIcon from "../../assets/image/icons/search.svg"
import favoritesIcon from "../../assets/image/icons/FavoritesIcon.png"


export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo}>
                <Link to={PATH.home}>
                    <img src={logo} alt={"stuff"}/>
                </Link>
            </div>

            <div className={s.userInfo}>
                <UserInfo/>
            </div>

            <form className={s.search}>
                <div className={s.iconSearch}>
                    <img src={searchIcon} alt={"search"}/>
                </div>

                <div className={s.input}>
                    <input
                        type="search"
                        name="search"
                        placeholder="Search..."
                        autoComplete="off"
                        // onChange={handleSearch}
                        // value={searchValue}
                    />
                </div>

                <div className={s.searchResult}>

                </div>
            </form>

            <div className={s.shopBlock}>
                <Link to={""} className={s.favorites}>
                    <img src={favoritesIcon} alt={"favorites"}/>
                </Link>

                <Link to={PATH.cart} className={s.cart}>
                    <img src={cartIcon} alt={"cart"}/>

                    <span className={s.count}>2</span>
                </Link>

            </div>
        </div>
    );
};


const UserInfo = () => {
    return (
        <div>
            <div>avatar</div>
            <div>User name</div>
        </div>
    )
}
