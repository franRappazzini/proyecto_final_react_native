import {applyMiddleware, combineReducers, createStore} from 'redux';

import {MensajesReducer} from '../reducers/MensajesReducer';
import {SalaReducer} from '../reducers/SalaReducer';
import {UserReducer} from '../reducers/UserReducer';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
  user: UserReducer,
  mensajes: MensajesReducer,
  sala: SalaReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
