import axios from 'axios';
export const SEARCH_GAMES = 'SEARCH_GAMES'
export const GET_GAMES = 'GET_GAMES'
export const FILTER_GENRE = 'FILTER_GENRE'
export const STATE_CLEAN = 'STATE_CLEAN'
export const FILTER_ORIGEN = 'FILTER_ORIGEN'
export const ORDEN_ALFA = 'ORDEN_ALFA'
export const ORDEN_RAT = 'ORDEN_RAT'
const URL_BASE = "http://localhost:3001/"

export const getGames = () => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}videogames`);
    dispatch({ type: GET_GAMES, payload: response.data });
  };
};

export const searchGames = (search) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}videogames`, { params: { search } });
    dispatch({ type: SEARCH_GAMES, payload: response.data });
  };
};

export const filterGames = (genre) => {
  if (genre == '') {
    return async function (dispatch) {
      const response = await axios.get(`${URL_BASE}videogames`);
      dispatch({ type: GET_GAMES, payload: response.data });
    }
  }
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}filtergames/${genre}`);
    dispatch({ type: FILTER_GENRE, payload: response.data });
  };
};

export const filterOrigen = (opcion) => {
  return {
    type: FILTER_ORIGEN, payload: opcion
  }
};
export const ordenAlfabetico = (opcion) => {
  return {
    type: ORDEN_ALFA, payload: opcion
  }
};
export const ordenPorRat = (opcion) => {
  return {
    type: ORDEN_RAT, payload: opcion
  }
};
export const stateClean = () => {
  return async function (dispatch) {
    const response = [];
    dispatch({ type: STATE_CLEAN, payload: response });
  };
};

