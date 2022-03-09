import {getDB} from '../../utils/services/db';

export const GET_MENSAJES = 'GET_MENSAJES';
export const CREATE_MENSAJE = 'CREATE_MENSAJE';
export const DELETE_MENSAJE = 'DELETE_MENSAJE';

const db = getDB();

export function getMensajes(id, username) {
  return dispatch => {
    try {
      db.ref(`users/${id}/chats/${username}`).on('value', data => {
        const mensajes = data.val()
          ? Object.keys(data.val()).map(key => ({...data.val()[key], id: key}))
          : false;
        dispatch({
          type: GET_MENSAJES,
          mensajes,
        });
      });
    } catch (err) {
      console.warn('ERROR', err);
    }
  };
}

export function createMensaje(id, username, mensaje) {
  return dispatch => {
    try {
      const {user, message, hour, day} = mensaje;

      db.ref(`users/${id}/chats/${username}`).push({
        username: user,
        message: message,
        hour: hour,
        day: day,
      });

      dispatch({type: CREATE_MENSAJE});
    } catch (err) {
      console.warn('ERROR', err);
    }
  };
}
