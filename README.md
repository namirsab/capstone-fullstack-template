# Fullstack Project Template

This is a template that can be used to create a new repository for
a fullstack application using:

- NodeJS and Express for the server side
- React for the client side
- prettier
- dotenv for handling environment variables

Keep in mind this is repository contains 2 npm packages:

- One in the `/` folder
- One in the `/client/` folder. This one was generated using [`create-react-app`](https://create-react-app.dev/).

This means you have to be careful where you install new npm packages.
Check the section "Installing npm packages" for more info.

## Usage

The top level `package.json` includes some scripts:

- `npm run server-start-prod`: Starts the server in production mode.
- `npm run server-start-dev`: Starts the server in development mode, using `nodemon`
- `npm run client-start-dev`: Starts the client in development mode.
- `npm run client-build`: Builds the client app for production.

If you want to develop just the server part, you can use `npm run server-start-dev`
If you want to develop just the client side app, you can use `npm run client-start-dev`

If you want to run both in development mode, you have to run each command in a different terminal.

## Installing npm packages

If you want to install an npm package to be used by the server, run the install the package
in the root folder of the repository.
E.g. installing `mongoose`

```
# Make sure you are in the root folder of the repository
npm install --save mongoose
```

If you want to install an npm package to be used by the client, install it in the `/client` folder
E.g, installing `react-router-dom`

```
# Make sure you are in the client folder of the repository
cd client
npm install --save react-router-dom
```

## Environment variables for the server side

The project use the [`dotenv`](https://www.npmjs.com/package/dotenv) package to handle environment variables.
This means you need to create a `.env` file and add the environmental variables needed.
You can see which environmental variables you need to set checking the `.env.template` file.

## Extras

The top level `package.json` contains a `postinstall` script. This is a script that will run after
running `npm install`. This script is installing for you also the dependencies in the `/client` folder.
This is just for convenience so you don't have to run `npm install` twice whenever you clone the repository.
