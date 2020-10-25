import Axios from 'axios';

import {
  SET_STARED,
  SELECT_ITEM,
  ADD_ITEM_TO_LIST,
  MAX_FIGHTER_ID,
  MIN_FIGHTER_ID,
} from '../reducers/heroes';

function setItem(item, type) {
  return {
    type,
    item,
  };
}
function addItem(type) {
  return {
    type,
  };
}

// set a heroe (stared, opponent or selected according to the type) in the store
export function dispatchSetItem(heroe, type = SET_STARED) {
  return async (dispatch, getState) => {
    console.warn('state before: ', getState());
    dispatch(setItem(heroe, type));
    if (type === SELECT_ITEM) {
      dispatch(addItem(ADD_ITEM_TO_LIST));
    }
    console.warn('state after: ', getState());
  };
}

// get a heroe from database and set the result in the store according to the type
export function dispatchGetHeroe(id = null, type = SET_STARED) {
  return async (dispatch, getState) => {
    console.warn('state before: ', getState());
    const heroeId =
      id || Math.floor(Math.random() * (MAX_FIGHTER_ID - MIN_FIGHTER_ID + 1)) + MIN_FIGHTER_ID;
    const response = await Axios.get(`${process.env.REACT_APP_API_URL}/${parseInt(heroeId, 10)}`);
    dispatch(setItem(response.data, type));
    console.warn('state after: ', getState());
  };
}

// get a heroe partial info from database and set the result in the store according to the type
export function dispatchGetHeroePatialDetails(id = null, type = SET_STARED) {
  return async (dispatch, getState) => {
    console.warn('state before: ', getState());
    const heroeId = id
      ? parseInt(id, 10)
      : Math.floor(Math.random() * (MAX_FIGHTER_ID - MIN_FIGHTER_ID + 1)) + MIN_FIGHTER_ID;
    const biography = await Axios.get(`${process.env.REACT_APP_API_URL}/${heroeId}/biography`);
    const image = await Axios.get(`${process.env.REACT_APP_API_URL}/${heroeId}/image`);
    const powerstats = await Axios.get(`${process.env.REACT_APP_API_URL}/${heroeId}/powerstats`);
    const response = {
      ...biography.data,
      image: { url: image.data.url },
      powerstats: powerstats.data,
    };

    dispatch(setItem(response, type));
    console.warn('state after: ', getState());
  };
}

export default {};
