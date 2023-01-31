import axios from "axios"

export const GET_DOGS = "GET_DOGS";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const GET_DB = "GET_DOG_DB";
export const GET_API = "GET_API";
export const GET_TEMPERAMENT = "GET_TEMPERAMENT";
export const ORDER_BY_WEIGHT= "ORDER_BY_WEIGHT";
export const FILTER_BY_RAZA= "FILTER_BY_RAZA";
export const POST_DOG = "POST_DOG";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_TEMPERAMENT = "ORDER_BY_TEMPERAMENT";

export function getDogs() {
    return async function(dispatch){
        let res = await axios.get("http://localhost:3001/dogs")
        return dispatch({type: GET_DOGS, payload: res.data})
    }
}            

export function searchByName(name) {
    return async function (dispatch) {
        let res = await axios.get(`http://localhost:3001/dogs?name=${name}`);
        return dispatch({ type: SEARCH_BY_NAME, payload: res.data })
    }
};
export function getDetail(id) {
    return async function (dispatch) {
        let res = await axios.get(`http://localhost:3001/dogs/${id}`);
        return dispatch({ type: GET_DOG_DETAIL, payload: res.data })
    }
};

export function getDogsApi() {
    return async function (dispatch) {
        let res = await axios.get(`http://localhost:3001/dogsapi`);
        return dispatch({ type: GET_API, payload: res.data })
    }
};
export function getDogsDb() {
    return async function (dispatch) {
        let res = await axios.get(`http://localhost:3001/dogsdb`);
        return dispatch({ type: GET_DB, payload: res.data })
    }
};

export function orderByName(payload){
    return{
        type:ORDER_BY_NAME,
        payload
    }
}


export function getTemperaments(){
    return async function (dispatch){
        let res = await axios.get(`http://localhost:3001/temperaments`)
        return dispatch({type: GET_TEMPERAMENT, payload:res.data})
    }
}

export function orderByWeight(payload){
    return{
        type: ORDER_BY_WEIGHT,
        payload
    }
}
export function orderByTemperament(payload){
    return{
        type: ORDER_BY_TEMPERAMENT,
        payload
    }
}
export function filterByRaza(payload){
    return{
        type: FILTER_BY_RAZA,
        payload
    }
}


export function postDog (input) {
    return async function (dispatch){
        try {
            const res = await axios.post(`http://localhost:3001/dog`, input);
            return dispatch({ type:POST_DOG, payload: res.data})
        } catch (error) {
            res.send(error)
        }
      
    }
}