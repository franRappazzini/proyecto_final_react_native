import {getDB} from '../../utils/services/db';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER = 'GET_USER';
export const CREATE_USER = 'CREATE_USER';
export const USER_MESSAGE = 'USER_MESSAGE';
export const USER_FAVORITE_ADD = 'USER_FAVORITE_ADD';
export const USER_FAVORITE_REMOVE = 'USER_FAVORITE_REMOVE';

const db = getDB();

export function getAllUsers() {
  return dispatch => {
    try {
      db.ref('users').on('value', data => {
        const users = data.val()
          ? Object.keys(data.val()).map(key => ({...data.val()[key], id: key}))
          : [];

        dispatch({
          type: GET_ALL_USERS,
          users,
        });
      });
    } catch (err) {
      console.warn(err);
    }
  };
}

export function getUser(user) {
  return async dispatch => {
    try {
      await dispatch({
        type: GET_USER,
        user,
      });
    } catch (err) {
      console.warn(err);
    }
  };
}

export function newUser(nombre, apellido, email, username, password) {
  return dispatch => {
    db.ref('users').push({
      nombre,
      apellido,
      email,
      username,
      password,
    });

    dispatch({type: CREATE_USER});
  };
}

export function userChat(user) {
  return dispatch => {
    dispatch({type: USER_MESSAGE, user});
  };
}

export function addUserToFav(userFav) {
  return dispatch => {
    dispatch({
      type: USER_FAVORITE_ADD,
      userFav,
    });
  };
}

export function removeUserToFav(userFav) {
  return dispatch => {
    dispatch({
      type: USER_FAVORITE_REMOVE,
      userFav,
    });
  };
}
