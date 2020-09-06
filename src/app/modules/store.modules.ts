import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { rootReducer } from '../reducers/root.reducer';
import { SocketActions } from '../actions/socket.actions';
import { ProgramActions } from '../actions/programs.actions';


@NgModule({
  imports: [
    NgReduxModule
  ],
  providers: [SocketActions, ProgramActions],
}) export class StoreModule {
  constructor(public store: NgRedux<any>, devTools: DevToolsExtension) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.configureStore(
      rootReducer,
      {},
      [],
      devTools.isEnabled() ? [devTools.enhancer()] : []
    );



    // // Enable syncing of Angular form state with our Redux modules. TODO?
    // provideReduxForms(modules);

  }
}
