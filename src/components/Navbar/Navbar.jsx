import React from 'react';
import Users from './Users'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className={s.nav}>

            <div className={s.item}><NavLink to="/Profile" activeClassName={s.activeLink}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/Officialweb" activeClassName={s.activeLink}>Officialweb</NavLink></div>
            <div className={s.item}><NavLink to="/Main" activeClassName={s.activeLink}>Main</NavLink></div>
            <div className={s.item}><NavLink to="/Messages" activeClassName={s.activeLink}>Messages</NavLink></div>
            <div className={s.item}><NavLink to="/News" activeClassName={s.activeLink}>News</NavLink></div>
            <div className={s.item}><NavLink to="/Music" activeClassName={s.activeLink}>Music</NavLink></div>

            <Users userName={'USER1'}/>
        </nav>
    )
}

export default Navbar;
