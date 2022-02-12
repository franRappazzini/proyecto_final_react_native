const initialState = {
  salas: [],
  mensajes: [],
};

export const SalaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SALAS':
      return {...state, salas: action.salas};
    case 'GET_MESSAGES_SALA':
      return {...state, mensajes: action.mensajes};
    default:
      return state;
  }
};
