import {getDB} from '../../utils/services/db';

export const GET_MENSAJES = 'GET_MENSAJES';

const db = getDB();

export function getMensajes(id, username) {
  console.warn(id, username);
  return async dispatch => {
    db.ref(`users/${id}/chats/${username}`).on('value', data => {
      const mensajes = data.val()
        ? Object.keys(data.val()).map(key => ({...data.val()[key], id: key}))
        : false;

      console.warn(mensajes);

      dispatch({
        type: GET_MENSAJES,
        mensajes,
      });
    });
  };
}

export function createMensaje(id, username, mensaje) {
  return async dispatch => {
    try {
      const {user, message, hour, day} = mensaje;

      db.ref(`users/${id}/chats/${username}`).push({
        username: user,
        message: message,
        hour: hour,
        day: day,
      });

      dispatch({
        type: GET_MENSAJES,
      });
    } catch (err) {
      console.warn('ERROR', err);
    }
  };
}
