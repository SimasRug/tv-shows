# TvShow

This project is a code exercise using [Angular CLI](https://github.com/angular/angular-cli) and [TVMaze](https://www.tvmaze.com/api) api

## Development server

This application is made out of two major parts:
* Node server
* Angular Cli project

In order to run this project in development mode:

 * When in project root run `npm install`
 * Navigate to ` ./server ` and run  `npm install`
 * While in ` ./server `  run `node index.js`, this will get the `node` server running
 * Back in the root of the project run `npm start `, that should start Angular development server


 ### Development process


To handle all the Api calls a node server was created. After defining all the major Api calls socket.IO was chosen to communicate with the Angular app. <br><br>

 On the Angular side a service was created to handle socket communication. Afterwards to keep state in application Redux was implemented, this required to create types, actions and reducers, for the majority of functionality of the app.
 <br><br>
 
After the app state was functional components and sub-components were created to display data held in the state. Later on some additional functionality was added.: sorting, filtering.




<!-- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md). -->
