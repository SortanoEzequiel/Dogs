import { 
    GET_DOGS,
    SEARCH_BY_NAME,
    GET_DOG_DETAIL,
    GET_TEMPERAMENT,
    ORDER_BY_WEIGHT,
    FILTER_BY_RAZA,
    POST_DOG, 
    GET_API,
    GET_DB,
    ORDER_BY_NAME,
    ORDER_BY_TEMPERAMENT,
} from "./action";

const initialState = {
    dogs: [],
    dogDetail: {},
    post:[],
    temperaments:[],
    filtrados:[],
};


function rootReducer (state = initialState, action){
    switch (action.type){
        case GET_DOGS:
            return{
                ...state,
                dogs: action.payload,
                filtrados: action.payload,
            };
        case GET_API:
            return{
                ...state,
                dogs: action.payload,
            };
        case GET_DB:
                return{
                    ...state,
                    dogs: action.payload,
                };
        case SEARCH_BY_NAME:
                return {
                    ...state,
                    dogs: action.payload,
                };
        case GET_DOG_DETAIL:
            return{
                ...state,
                dogDetail: action.payload,
            }
        case ORDER_BY_NAME:
            const dogsSorted = action.payload === 'asc'?
            state.dogs.sort((a, b) => {
                if(a.name > b.name) return 1;
                if(b.name > a.name) return -1;
                return 0;
            }):
            state.dogs.sort((a, b) => {
                if(a.name > b.name) return -1;
                if(b.name > a.name) return 1;
                return 0;
            });
            return{
                ...state,
                dogs: dogsSorted
            }
        case ORDER_BY_WEIGHT:
            const dogsWeight = action.payload === 'asc' ?
            
            state.dogs.sort((a, b) => {
                if(parseInt(a.peso[1]) > parseInt(b.peso[1])) return 1;
                if(parseInt(b.peso[1]) > parseInt(a.peso[1])) return -1;
                return 0;
            }) : 
            state.dogs.sort((a, b) => {
                if(parseInt(a.peso[1]) > parseInt(b.peso[1])) return -1;
                if(parseInt(b.peso[1]) > parseInt(a.peso[1])) return 1;
                return 0;
            });
            console.log(dogsWeight)
            return{
                ...state,
                dogs: dogsWeight
            }
        case FILTER_BY_RAZA:
            return{
                ...state,
                dogs: action.payload
            }
        case GET_TEMPERAMENT:
        return{
            ...state,
            temperaments: action.payload
        }
        case ORDER_BY_TEMPERAMENT:
            let temp =[];
            console.log(state.dogs.filter(elem => elem.temperamento.includes(action.payload)))
            if(action.payload) {
            temp = state.dogs.filter(element => element.temperamento.includes(action.payload))
            } return {...state, filtrados:temp}      
        case POST_DOG:
            return{
                ...state
            }
            default: return state
    }
}

export default rootReducer;