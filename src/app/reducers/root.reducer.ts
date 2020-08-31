import { combineReducers } from 'redux';

import { socketReducer } from './socket.reducer';
import { programReducer } from './program.reducer';



export const rootReducer = combineReducers({
    socket: socketReducer,
    programs: programReducer 
})