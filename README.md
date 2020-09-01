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


To handle all the Api calls a node server was created. After, defining all the major Api calls socket.IO was chosen to communicate with the Angular app. <br><br>

 On the Angular side, a service was created to handle socket communication. Afterwards, to keep state, Redux was implemented, this required to create types, actions and reducers, for the majority of functionality of the app.
 <br><br>

After the app state was functional, components and sub-components were created to display the data held in state. Later on, some additional functionality was added.: sorting, filtering.