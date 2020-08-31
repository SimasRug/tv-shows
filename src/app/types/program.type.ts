export interface ITvProgramsInfo {
   programsInfo : ITvProgramInfo[];
   selectedProgram: ITvProgram,
   searchedProgram: ITvProgram[],
   shows: ITvProgram[],
   sortedPrograms: ITvProgramInfo[],
   searchedSortedProgram: ITvProgramInfo[]
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

