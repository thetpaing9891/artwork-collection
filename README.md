# ArtworkCollection

This application was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4, you can find documentation and help at there.
You can check demo in here - [https://artwork-collection.netlify.app](https://artwork-collection.netlify.app)

## Setting up

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.

## Getting started

```
git clone https://github.com/thetpaing9891/artwork-collection.git
cd artwork-collection
npm install
```

## Running locally

1. Create a environment component at the root (/src) directory of your application and add the variables to it.

```
apiUrl: 'https://api.artic.edu/api/v1',
```

2. In order to run the code locally please run either one of the following:

```
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Building for production

To build the artwork collection application for production, run:

```
ng run build
```

## Common errors

### FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory

Sometimes the build will fail due to insufficient memory allocated for the build.

To fix that, append the following to your build command

```
--max-old-space-size=4096
```
