const initialState = {
  salas: [],
  mensajes: [],
  uniqueSala: {},
  salasFav: [],
};

export const SalaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SALAS':
      return {...state, salas: action.salas};
    case 'GET_MESSAGES_SALA':
      return {...state, mensajes: action.mensajes};
    case 'GET_UNIQUE_SALA':
      return {...state, uniqueSala: action.uniqueSala};
    case 'SALA_FAVORITE_ADD':
      return {...state, salasFav: [...state.salasFav, action.salaFav]};
    case 'SALA_FAVORITE_REMOVE':
      return {
        ...state,
        salasFav: state.salasFav.filter(sala => sala.id !== action.salaFav.id),
      };
    default:
      return state;
  }
};
