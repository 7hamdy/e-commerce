/*

# npm init -y creates the default  configuration  “package.json”

# What is package.json ?
The package.json file records all of the important metadata of a project. 
It includes the dependent packages your code needs to work, author, name, scripts, proxies and much more.
It is the soul of any npm package.

# npm install express --save  installs express library and adds it to dependencies in package.json

#In the package.json file, there is an object called  : dependencies 
it consists of all the packages that are used in the project with its version number. 

#there is an object called as :
dev Dependencies and it consists of all the packages that are used in the project in its development phase and 
not in the production or testing environment with its version number.


# nodemon package install in development Mode
restart the Node server every time you make a code change    : npm i nodemon --save-dev

As we can see from the setup in the scripts tag below:
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  #So when we run : "npm run dev"

*/
