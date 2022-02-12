import {GET_MENSAJES} from '../actions/MensajesActions';

const initialState = [];

export const MensajesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENSAJES:
      return action.mensajes;
    default:
      return state;
  }
};
