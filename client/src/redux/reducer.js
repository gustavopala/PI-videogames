import { GET_GAMES, SEARCH_GAMES, FILTER_GENRE,STATE_CLEAN,FILTER_ORIGEN, ORDEN_ALFA, ORDEN_RAT } from './actions'

const initialState = {
    myGames: [],
    allGames: [],
    mySearch: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAMES:
            return { ...state, myGames: action.payload, allGames: action.payload };
        case SEARCH_GAMES:
            return { ...state, myGames: action.payload.slice(0,25), allGames: action.payload.slice(0,20) };
        case FILTER_GENRE:
            return {...state, myGames: action.payload, allGames: action.payload};
        case FILTER_ORIGEN:
            const { myGames } = state;
            if('Api' === action.payload){
                const filterApi = state.myGames.filter(game => typeof game.id === "number");
                return {...state,allGames: filterApi};
            }else if('Bd' === action.payload){
                const filterBd = state.myGames.filter(game => typeof game.id !== "number");
                return {...state,allGames: filterBd};
            }else {
                return {...state,allGames: myGames};
            }
            case ORDEN_ALFA:
                const sortedGames = [...state.allGames].sort((a, b) => {
                  if (action.payload === 'Ascendente') {
                    return a.name.localeCompare(b.name);
                  } else if(action.payload === 'Descendente'){
                    return b.name.localeCompare(a.name);
                  }
                });
                return {
                  ...state,
                  allGames: sortedGames
                };
        case ORDEN_RAT:
            const ratingGames = [...state.allGames].sort((a, b) => {
                if (action.payload === 'Ascendente') {
                    return a.rating - b.rating;
                } else if(action.payload === 'Descendente'){
                    return b.rating - a.rating;
                }
            });
            return {
                ...state,
                allGames: ratingGames
            }
        case STATE_CLEAN:
            return { allGames: action.payload,} 
        default:
            return { ...state };
    }
}

export default reducer;