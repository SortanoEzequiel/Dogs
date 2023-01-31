import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useParams } from 'react-router';
import { getDetail } from '../actions/action';
import styles from "./dogDetail.module.css";


export default function dogDetail(){
    const dispatch = useDispatch();
    const { id } = useParams();
    const dogDetail = useSelector(state => state.dogDetail)
    const [raza,setRaza] = useState([])

    useEffect(() => {
        setRaza([])
        dispatch(getDetail(id));
    }, [dispatch, id])

 

    


return(
    <div className={styles.div}>
       
        {
      //      dogDetail.length > 0 ?
            <div  > 
                    <h1 className={styles.name}>{dogDetail.name}</h1>
                    <div className={styles.img}> 
                    <img src={dogDetail.imagen} alt="" width="420px" height="250px" border="solid"/>
                    </div> 
                     <h1 className={styles.name}>Peso promedio:{dogDetail.peso} Kg</h1> 
                    <h1 className={styles.name}>Altura promedio:{dogDetail.altura} Cm</h1> 
                    <h1 className={styles.name}>Temperamento:{dogDetail.temperamento}</h1>
                    <h1 className={styles.name}>Longevidad:{dogDetail.longevidad}</h1>
                  
             </div>
      //     : <h1>Loading...</h1>
        }
    </div>
)
};  
