import {Injectable} from '@angular/core';



@Injectable()
export class SocketActions {

  static readonly CONNECTION_SUCCEEDED = 'CONNECTION_SUCCEEDED';
  static readonly CONNECTION_LOST = 'CONNECTION_LOST';

  connectionSucceeded() {
    return {
      type: SocketActions.CONNECTION_SUCCEEDED,
    };
  }

  connectionLost() {
    return {
      type: SocketActions.CONNECTION_LOST,
    };
  }

}