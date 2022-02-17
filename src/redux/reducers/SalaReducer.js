const initialState = {
  salas: [],
  mensajes: [],
  uniqueSala: {},
};

export const SalaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SALAS':
      return {...state, salas: action.salas};
    case 'GET_MESSAGES_SALA':
      return {...state, mensajes: action.mensajes};
    case 'GET_UNIQUE_SALA':
      return {...state, uniqueSala: action.uniqueSala};
    default:
      return state;
  }
};
