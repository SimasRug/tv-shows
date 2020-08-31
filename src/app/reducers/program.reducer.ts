import { ISocket } from '../types/socket.type';
import { ProgramActions } from '../actions/programs.actions';
import { ITvProgramsInfo } from '../types/program.type';
import {Utils} from '../utils/utils';


const INITIAL_STATE: ITvProgramsInfo = {
    programsInfo: [],
    selectedProgram: undefined,
    searchedProgram: [],
    shows: [],
    sortedPrograms: [],
    searchedSortedProgram: []
};

export function programReducer(state: ITvProgramsInfo = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case ProgramActions.PROGRAMS_LOADED:
            return {
                ...state,
                programsInfo: payload
            }
        case ProgramActions.SHOWS_LOADED:
            return {
                ...state,
                shows: payload
            }
        case ProgramActions.PROGRAM_SELECTED:
            return {
                ...state,
                selectedProgram: payload
            }
        case ProgramActions.PROGRAM_FOUND:
            return {
                ...state,
                searchedProgram: payload
            }
        case ProgramActions.PROGRAM_SORTED:
            return {
                ...state,
                sortedPrograms: payload
            }
            case ProgramActions.PROGRAM_SEARCHED_SORTED:
            return {
                ...state,
                searchedSortedProgram: payload
            }
        // case .CONNECTION_LOST:
        //     return {
        //         ...state,
        //         connected: false
        //     }
    }

    return state;
} 