import {getDB} from '../../utils/services/db';

export const GET_SALAS = 'GET_SALAS';
export const GET_MESSAGES_SALA = 'GET_MESSAGES_SALA';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CREATE_SALA = 'CREATE_SALA';
export const DELETE_SALA = 'DELETE_SALA';
export const GET_UNIQUE_SALA = 'GET_UNIQUE_SALA';
export const SALA_FAVORITE_ADD = 'SALA_FAVORITE_ADD';
export const SALA_FAVORITE_REMOVE = 'SALA_FAVORITE_REMOVE';

const db = getDB();

export function getSalas() {
  return dispatch => {
    try {
      db.ref('salas').on('value', data => {
        const salas = data.val()
          ? Object.keys(data.val()).map(key => ({...data.val()[key], id: key}))
          : false;

        dispatch({
          type: GET_SALAS,
          salas,
        });
      });
    } catch (err) {
      console.warn(err);
    }
  };
}

export function getMensajesSala(idSala) {
  return dispatch => {
    try {
      db.ref(`salas/${idSala}/messages`).on('value', data => {
        const mensajes = data.val()
          ? Object.keys(data.val()).map(key => ({...data.val()[key], id: key}))
          : false;

        dispatch({
          type: GET_MESSAGES_SALA,
          mensajes,
        });
      });
    } catch (err) {
      console.warn(err);
    }
  };
}

export function createMensajeSala(idSala, mensaje) {
  return dispatch => {
    try {
      db.ref(`salas/${idSala}/messages`).push(mensaje);

      dispatch({type: SEND_MESSAGE});
    } catch (err) {
      console.warn(err);
    }
  };
}

export function createSala(sala) {
  return dispatch => {
    try {
      db.ref('salas').push(sala);

      dispatch({type: CREATE_SALA});
    } catch (err) {
      console.warn(err);
    }
  };
}

export function deleteSala(salaId) {
  return dispatch => {
    try {
      db.ref(`salas/${salaId}`).remove();

      dispatch({
        type: DELETE_SALA,
        salaId,
      });
    } catch (err) {
      console.warn(err);
    }
  };
}

export function getUniqueSala(uniqueSala) {
  return dispatch => {
    dispatch({type: GET_UNIQUE_SALA, uniqueSala});
  };
}

export function addSalaToFav(salaFav) {
  return dispatch => {
    dispatch({type: SALA_FAVORITE_ADD, salaFav});
  };
}

export function removeSalaFromFav(salaFav) {
  return dispatch => {
    dispatch({type: SALA_FAVORITE_REMOVE, salaFav});
  };
}
