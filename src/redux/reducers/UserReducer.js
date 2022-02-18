const initialState = {user: {}, users: [], userChat: {}, usersFav: []};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {...state, user: action.user};
    case 'GET_ALL_USERS':
      return {...state, users: action.users};
    case 'CREATE_USER':
      return state;
    case 'USER_MESSAGE':
      return {...state, userChat: action.user};
    case 'USER_FAVORITE_ADD':
      return {...state, usersFav: [...state.usersFav, action.userFav]};
    case 'USER_FAVORITE_REMOVE':
      return {
        ...state,
        usersFav: state.usersFav.filter(
          userFav => userFav.id !== action.userFav.id,
        ),
      };
    default:
      return state;
  }
};
