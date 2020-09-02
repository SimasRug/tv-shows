export interface ISocket {
   connected: boolean;
   error: { status: number, message: string, userMessage: string };
}