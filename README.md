[![Stories in Ready](https://badge.waffle.io/beards-of-zeus/beards-of-zeus.png?label=ready&title=Ready)](https://waffle.io/beards-of-zeus/beards-of-zeus)
# Tagalong

## Description
Tagalong is an application that allows you find collaborators and participants for activities. Create activities on the fly
and join or leave activities at the click of a button. Tagalong makes getting together easy.

## Contributing
If you'd like to help make Tagalong awesome, take a look at our style guide and contribution
guidlines.

* [Style Guide](_STYLE-GUIDE.md)
* [Contributing Guidelines](_CONTRIBUTING.md)

## Directory Structure
Tagalong is built using React.js, Auth0, Node.js with Express and Sequelize. The most important directory is the client/components directory, which contains
the various React components that make up the application. Webpack is used to bundle all of the component files into a single app.js file located in the public/js 
directory. boot.jsx renders the entire application to the webpage. The landing page is created by home.jsx, and the application view is created in main.jsx.

Our basic server.js file is located in the root directory, while the server-config and database files are located in the server directory. 

Our Gruntfile uses webpack and cssmin to build our application and upload to deploy our application. 

## Local Testing Instructions
* Start mysql and create the Olympus database
* Preload local database by running mysql -u root < preload.dat 
* Ensure User, Activity, UserActivity tables are created (This will occur automatically on running the server)
* If you make any changes to a .jsx file, run webpack. ```webpack -w``` will run webpack and watch the client/components folder

## Team
* Product Owner
  * Jonathan Mason
* Scrum Master
  * Kevin Chiang
* Development
  * Hailey Foster
  * Marq Short
  * Owen Dismuke
  * Jonathan Mason
  * Kevin Chiang

