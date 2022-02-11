import {GET_ALL_USERS, GET_USER} from '../actions/UserActions';

const initialState = {user: {}, users: []};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {...state, user: action.user};
    case GET_ALL_USERS:
      return {...state, users: action.users};
    default:
      return state;
  }
};
