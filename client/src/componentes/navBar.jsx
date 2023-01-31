import React from "react";
import {Link} from "react-router-dom";
import styles from "./navBar.module.css";

export default function NavBar({onSearch}){
    return (
        <ul className={styles.menu}>
            <li><Link to='/home' className={styles.a}>Home </Link></li>
            <li><Link to='/create' className={styles.a}>Create new dog</Link></li>

       </ul>
    )
}