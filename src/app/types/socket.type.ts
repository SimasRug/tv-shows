export interface ISocket {
   connected: boolean;
   error: Ierror
}

export interface Ierror {
   status: number;
   message: string;
   userMessage: string
};
