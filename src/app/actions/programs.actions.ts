import {Injectable} from '@angular/core';
import { ITvProgramInfo, ITvProgram, IProgramCast, IProgramEpisode, ISearchedPrograms } from '../types/program.type';



@Injectable()
export class ProgramActions {

  static readonly PROGRAMS_LOADED = 'PROGRAMS_LOADED';
  static readonly SHOWS_LOADED = 'SHOWS_LOADED';
  static readonly PROGRAMS_FAILED = 'PROGRAMS_FAILED';
  static readonly PROGRAM_SELECTED = 'PROGRAM_SELECTED';
  static readonly PROGRAM_FOUND = 'PROGRAM_FOUND';
  static readonly PROGRAM_EPISODES_FOUND = 'PROGRAM_EPISODES_FOUND';
  static readonly PROGRAM_CAST_FOUND = 'PROGRAM_CAST_FOUND';
  static readonly PROGRAM_SORTED = 'PROGRAM_SORTED';
  static readonly PROGRAM_SEARCHED_SORTED = 'PROGRAM_SEARCHED_SORTED';

  programsLoaded(payload: ITvProgramInfo[]) {
    return {
      type: ProgramActions.PROGRAMS_LOADED,
      payload
    };
  }
  showsLoaded(payload: ITvProgram[]) {
    return {
      type: ProgramActions.SHOWS_LOADED,
      payload
    };
  }

  programLoadFailed(payload) {
    return {
      type: ProgramActions.PROGRAMS_FAILED,
      payload
    };
  }

  programSelected(payload: ITvProgram) {
    return {
      type: ProgramActions.PROGRAM_SELECTED,
      payload
    };
  }

  programsFound(payload: ISearchedPrograms[]) {
    return {
      type: ProgramActions.PROGRAM_FOUND,
      payload
    };
  }
  programCastFound(payload: IProgramCast[]) {
    return {
      type: ProgramActions.PROGRAM_CAST_FOUND,
      payload
    };
  }
  programEpisodesFound(payload: IProgramEpisode[]) {
    return {
      type: ProgramActions.PROGRAM_EPISODES_FOUND,
      payload
    };
  }
  sortPrograms(payload: ITvProgramInfo[] ) {
    return {
      type: ProgramActions.PROGRAM_SORTED,
      payload
    };
  }
  sortSearchedPrograms(payload: ISearchedPrograms[] ) {
    return {
      type: ProgramActions.PROGRAM_SEARCHED_SORTED,
      payload
    };
  }

}