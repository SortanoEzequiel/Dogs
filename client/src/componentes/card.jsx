import React from "react";
import styles from "./card.module.css";
import {Link} from "react-router-dom"; 
const Card = (props) => {
    return(
        <div className={styles.caja}>
            <div className={styles.img}>
            <img src={props.img} alt="" width="100%" height="150" /> 
            </div>
            <div className={styles.contenido}>
            <h4 className={styles.h4}>{props.name}</h4>
            <h4 className={styles.h4}>{props.imagen}</h4>
             <h4 className={styles.h4}>{props.peso} Kg</h4> 
             <h4 className={styles.h4}>{props.temperamento}</h4> 
             <h4 className={styles.h4}>{props.temperament}</h4> 
             <h4 className={styles.h4}>{props.pes}</h4> 
            <Link to= {'/dogs/' + props.id} className={styles.link}>
             <h4 className={styles.h4}>Dog-Detail</h4></Link>
             </div>
            

        </div>
    )
}

export default Card