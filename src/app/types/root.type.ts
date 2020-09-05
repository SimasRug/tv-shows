import { ISocket } from './socket.type';
import { ITvProgramsInfo } from './program.type';

export interface IAppState {
    socket: ISocket;
    tvPrograms:  ITvProgramsInfo;
}
