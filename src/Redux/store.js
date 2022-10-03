import { combineReducers,createStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import ticketsReducer from './reducers/ticketSlice';

import userReducer from './reducers/userSlice'

const rootReducer = combineReducers({
  
   user: userReducer,
   tickets: ticketsReducer,

})


const store = createStore(rootReducer,composeWithDevTools())

export default store;