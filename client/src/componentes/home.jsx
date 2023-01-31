import React, { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {orderByWeight, getDogs, orderByName, getTemperaments, orderByTemperament} from "../actions/action";
import Card from "./card";
import styles from "./home.module.css";
import Paginate from "./paginate";
import SearchBar from "./searchBar";



export default function Home() {
    const dispatch = useDispatch();
    const dogs= useSelector(state=>state.dogs)
    const temperament = useSelector(state => state.temperaments)
    const filtrados = useSelector(state => state.filtrados)


    


    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage, setDogsPerPage] = useState(8);
    const lastDog = dogsPerPage  * currentPage;
    const firstdog = lastDog - dogsPerPage;
    const currentDogs = dogs.slice(firstdog, lastDog) 
    const currentFiltro = filtrados.slice(firstdog, lastDog)
    const [state, setState] = useState(1)
    const [filtro, setFiltro] = useState([])

    useEffect(()=>{
        dispatch(getDogs()) 
        dispatch(getTemperaments())
       
    },[dispatch])
    
    function handlerFiltro(e){
        
    }

    function handleOrderByName(e){
        dispatch(orderByName(e.target.value))
        setState(state + 1)
    }

    function handlerOrderByTemperament(e) {
        dispatch(orderByTemperament(e.target.value))
        setState(state + 1)
    }

    function handlerOrderByWheight(e){
        dispatch(orderByWeight(e.target.value))
        setState(state + 1)
    }
    const paginate = (number) => {
        setCurrentPage(number)
    };

    function returnToFirstPage () {
        setCurrentPage(1)
    }
    return (
        
        <div className={styles.home}>
            {
               
            <div className={styles.filtros}>
                <SearchBar returnToFirstPage = {returnToFirstPage}/>
                <select onChange={e => handleOrderByName(e)} defaultValue='default' className = {styles.filters}>
                    <option value={'asc'}>A-Z</option>
                    <option>Z-A</option>
                </select>
                <select onChange={e => handlerOrderByWheight(e)} defaultValue='default' className={styles.filters}>
                    <option value="asc"> Menor Peso </option>
                    <option value="desc"> Mayor Peso </option>
                </select>
                 
              <select onChange={e => handlerOrderByTemperament(e)} defaultValue='default' className={styles.filters}>
                       
                        <option value = "default">Elegir temperamento</option>
                        {
                           temperament && temperament.map(a => (
                                <option value = {a.name} key={a.id}> {a.name} </option>))
                        }
              </select>
                
            </div>
               
            
            }
            <div>
                <Paginate 
                dogsPerPage={dogsPerPage}
                dogs={dogs?.length}
                paginate={paginate}
                currentPage={currentPage}
                />
                <div className={styles.contenedor}>
                    {

                    

                       currentDogs && currentFiltro?.map( el => {
                             return <Card name={el.name} temperamento={el.temperamento} peso ={el.peso}id={el.id} img={el.imagen}  key={el.id} /> 
                          })
                       
                     
                        
                    }   

                    
                </div>
             </div>
        </div>
    )
}