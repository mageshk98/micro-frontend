# Micro-frontend

This example demos a basic host application loading remote component.

- `main` is the host application.
- `header` standalone application which exposes `Search` component.
- `form` standalone application which exposes `Button, Text` component.

# Running Demo

Install `node_modules` in each application and Run `npm start`.

Run the `main` application firdt then run remote application one by one to see how it works.

- [localhost:3000](http://localhost:3000/) (Main)
- [localhost:3001](http://localhost:3001/) (Header)
- [localhost:3002](http://localhost:3002/) (Form)


<!-- 
Main, Form, Header

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

//Main
new ModuleFederationPlugin({
     name: "Main",
     remotes: {
       Header: `Header@http://localhost:3001/moduleEntry.js`,
       Form: `Form@http://localhost:3002/moduleEntry.js`,
     },
     shared: {
       ...dependencies,
       react: {
         singleton: true,
         requiredVersion: dependencies["react"],
       },
       "react-dom": {
         singleton: true,
         requiredVersion: dependencies["react-dom"],
       },
     },
   }),

//Form

new ModuleFederationPlugin({
     name: "Form",
     filename: "moduleEntry.js",
     exposes: {
       "./App": "./src/App.js",
       "./Button": "./src/widgets/Button.jsx",
       "./Text": "./src/widgets/Text.jsx",
     },
     shared: {
       ...dependencies,
       react: {
         singleton: true,
         requiredVersion: dependencies["react"],
       },
       "react-dom": {
         singleton: true,
         requiredVersion: dependencies["react-dom"],
       },
     },
   }),

//header

new ModuleFederationPlugin({
     name: "Header",
     filename: "moduleEntry.js",
     exposes: {
       "./App": "./src/App.js",
       "./Search": "./src/Search.js",
     },
     shared: {
       ...dependencies,
       react: {
         singleton: true,
         requiredVersion: dependencies["react"],
       },
       "react-dom": {
         singleton: true,
         requiredVersion: dependencies["react-dom"],
       },
     },
   }),




-->
