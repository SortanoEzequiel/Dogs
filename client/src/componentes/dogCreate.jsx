import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postDog, getDogs, getTemperaments } from "../actions/action";
import styles from './dogCreate.module.css'

function validate(post) {
    let errors = {};

    if (!post.name) {
        errors.name = 'Ingresar nombre de la raza'
    }
    
    if (!post.pesoMin) {
        errors.pesoMin = 'Ingresar peso minimo'
    }
    if (!post.pesoMax) {
        errors.pesoMax = 'Ingresar peso maximo'
    }
    if (!post.alturaMin) {
        errors.alturaMin= 'Ingresar altura maxima'
    }
    if (!post.alturaMax) {
        errors.alturaMax= 'Ingresar altura maxima'
    }
    if (!post.longevidad) {
        errors.alturaMax= 'Ingresar longevidad'
    }
    return errors;
}

export default function DogCreate() {
    const dispatch = useDispatch();
    const temperament = useSelector(state => state.temperaments);
    const posts = useSelector(state => state.post)
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])


    const [post, setPost] = useState({
        name: "",
        pesoMin: 0,
        pesoMax: 0,
        alturaMin: 0,
        alturaMax: 0,
        longevidad: "",
        temperamento: [],
    })

    function handleInputChange(e) {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
        setErrors(validate({
            ...post,
            [e.target.name]: e.target.value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (Object.values(errors).length > 0) alert("Por favor rellenar todos los campos")
        else {
            dispatch(postDog(post))
            alert('¡Dog creado!')
        }
    };

    function handleSelectDog(e){
        if(!post.temperamento.includes(e.target.value))
        setPost({
            ...post,
            temperamento:[...post.temperamento, e.target.value]
        })
        setErrors(validate({
            ...post,
            temperamento: [...post.temperamento, e.target.value]
        }));
    }
    


       

    return (
        <div className={styles.container}>
            <div className={styles.bkg} />
            <div className={styles.bkgcolor}>
                <div className={styles.form}>
                    <h1>Please fill in all the fields</h1>
                    <form onSubmit={e => handleSubmit(e)}>
                       
                        <div>
                            <label>Name the race</label>
                            <input type="text"  value={post.name} name='name' onChange={e => handleInputChange(e)} />
                            {errors.name && (
                                <p>{errors.name}</p>
                            )}
                        </div>
                        <div>
                            <label>PesoMin</label>
                            <input type="number" value={post.pesoMin} name='pesoMin' onChange={e => handleInputChange(e)} />
                            {errors.pesoMin&& (
                                <p>{errors.pesoMin}</p>
                            )}
                        </div>
                        <div>
                            <label>PesoMax</label>
                            <input type="number" value={post.pesoMax} name='pesoMax' onChange={e => handleInputChange(e)} />
                            {errors.pesoMax&& (
                                <p>{errors.pesoMax}</p>
                            )}
                        </div>   
                        <div>
                            <label>AlturaMin</label>
                            <input type="number" value={post.alturaMin} name='alturaMin' onChange={e => handleInputChange(e)} />
                            {errors.alturaMin&& (
                                <p>{errors.alturaMin}</p>
                            )}
                        </div>   
                        <div>
                            <label>AlturaMax</label>
                            <input type="number" value={post.alturaMax} name='alturaMax' onChange={e => handleInputChange(e)} />
                            {errors.alturaMax&& (
                                <p>{errors.alturaMax}</p>
                            )}
                        </div>   
                        <div>
                            <label>Longevidad</label>
                            <input type="text" value={post.longevidad} name='longevidad' onChange={e => handleInputChange(e)} />
                            {errors.longevidad&& (
                                <p>{errors.longevidad}</p>
                            )}
                        </div>   
                        <div>
                            <label>Temperamento</label>
                            <input type="array" value={post.temperamento} name='temperamento' onChange={e => handleInputChange(e)} />
                            {errors.temperamento&& (
                                <p>{errors.temperamento}</p>
                            )}
                        </div> 
            
                                 
                        
                         {/* <div>
                            <select onChange={e => handleSelectDog(e)}value='default'
                            className={styles.dietSelect}>
                                <option value="default" disabled className={styles.dietOption}>Elegir temperamento</option>
                                {
                                    temperament && temperament.map(d => (
                                        <option value={d.name} key={d.id} className={styles.dietOption}>{d.name}</option>
                                    ))
                                }
                            </select>
                            {errors.dogs&& (
                                <p style={{ float: 'right' }}>{errors.dogs}</p>
                            )}
                        </div>  */}
                        <button type='submit' className={styles.createButton}>¡Crear!</button>
                    </form>
                    
                </div>
            </div>
        </div>
    )                         
};