/*
create config.env file  ==> all the configurations related to environment variables.
installed dotenv ==> npm install dotenv
npm install dotenv
const dotenv = require("dotenv").config({ path: "./config.env" });
example : const PORT = process.env.PORT || 3000;
--------------------------------------------------------------
exception upload file in github: ex:node_modules,config.env 
create  .gitignore file and add file
node_modules/
config.env
--------------------------------------------------------------
HTTP request logger middleware for node.js ==> morgan
npm install morgan
const morgan = require("morgan");
app.use(morgan("dev"));

*/
