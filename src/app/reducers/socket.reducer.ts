import { ISocket, Ierror } from '../types/socket.type';
import { SocketActions } from '../actions/socket.actions';

const INITIAL_STATE: ISocket = {
    connected: false,
    error: undefined
};

export function socketReducer(state: ISocket = INITIAL_STATE, action): ISocket {
    const { type, payload } = action;
    switch (type) {
        case SocketActions.CONNECTION_SUCCEEDED:
            return {
                ...state,
                connected: true
            };
        case SocketActions.CONNECTION_LOST:
            return {
                ...state,
                connected: false
            };
        case SocketActions.API_ERROR:
            return {
                ...state,
                error: payload
            };
    }

    return state;
}
