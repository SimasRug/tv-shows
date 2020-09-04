export interface ITvProgramsInfo {
    programsInfo: ITvProgramInfo[];
    searchedProgram: ISearchedPrograms[];
    shows: ITvProgram[];
    sortedPrograms: ITvProgramInfo[];
    searchedSortedProgram: ISearchedPrograms[];
    selectedProgram: ITvProgram;
    cast: IProgramCast[];
    episodes: IProgramEpisode[];
}

export interface ITvProgramInfo {
    airdate: string;
    airstamp: string;
    airtime: string;
    id: number;
    image: string;
    name: string;
    number: number;
    runtime: number;
    season: number;
    show: ITvProgram;
    summary: string;
    url: string;
}

export interface ISearchedPrograms {
    score: number;
    show: ITvProgram;
}

export interface ITvProgram {
    externals: any;
    genres: string[];
    id: number;
    image: { medium: string, original: string };
    language: string;
    name: string;
    network: { id: number, name: string, country: any };
    officialSite: string;
    premiered: string;
    rating: { average: number };
    runtime: number;
    schedule: { time: number, days: string[] };
    status: string;
    summary: string;
    type: string;
    updated: number;
    url: string;
    webChannel: any;
    weight: number;
}

export interface IProgramCast {
    character: { id: number, url: string, name: string, image: {medium: string, original: string} };
    person: { id: number, url: string, name: string, country: any, birthday: string, image: {medium: string, original: string} };
    self: boolean;
    voice: boolean;
}

export interface IProgramEpisode {
    airdate: string;
    airstamp: string;
    airtime: string;
    id: number;
    image: {medium: string, original: string};
    name: string;
    number: number;
    runtime: number;
    season: number;
    summary: string;
    url: string;
}

