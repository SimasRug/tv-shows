import { Injectable } from '@angular/core';
import { Ierror } from '../types/socket.type';




@Injectable()
export class SocketActions {

  static readonly CONNECTION_SUCCEEDED = 'CONNECTION_SUCCEEDED';
  static readonly CONNECTION_LOST = 'CONNECTION_LOST';
  static readonly API_ERROR = 'API_ERROR';

  connectionSucceeded(): { type: string } {
    return {
      type: SocketActions.CONNECTION_SUCCEEDED,
    };
  }

  connectionLost(): { type: string } {
    return {
      type: SocketActions.CONNECTION_LOST,
    };
  }

  apiError(payload: Ierror): { type: string, payload: Ierror } {
    return {
      type: SocketActions.API_ERROR,
      payload,
    };
  }

}
