# DynicsImageViewer


## To set up the image Viewer

To install this application, you need:

1. Nodejs - Available at https://nodejs.org/en/
2. Visual Studio Code - https://code.visualstudio.com/download
3. Access to the repo at https://proviewds.visualstudio.com/DynicsImageViewer
4. Follow these instructions to set up Git in VS Code to clone the project - https://marketplace.visualstudio.com/items?itemName=ms-vsts.team
5. In VS Code, Pull the project.
6. In VS Code, at the root, run "npm install" (without the quotes). This pulls down all the packages needed to run the app.
7. In a terminal session, run "ng serve" (without the quotes). This serves up the content using node.
8. Add a new terminal session, and run "node server" (without the quotes). This starts up the server component. 
9. Open a new brower, and navigate to "http://localhost:4200.
10 The app should be served up.

Tips:
1. In server.js, change the sql server credentials for the server you are connecting to.
2. There is a database set up on SQLDEV, called ImagesDB.

## More about Angular-cli commands
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.