# Eat-Da-Burger!

## Table of Contents

- [Description](#program-description)
- [Repo and Heroku App Links](#repo-and-heroku-app-links)
- [Installation](#installation-instructions)
- [Usage](#usage-information) 
- [License](#licenses) 
- [Contributing](#contributing)
- [Tests](#tests)
- [DEMO VIDEO](#DEMO-click-link-to-view)
- [Screenshots](#screenshots)
- [Questions](#questions)

## Program Description
Eat-Da-Burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Built with the MVC design pattern, Node and MySQL to query and route data, and Handlebars to generate the HTML. The app is deployed to Heroku and the database is linked via JAWSDB.

## Repo and Heroku App Links
* [Link to GitHub Repo - https://github.com/brandyquinlan/Burger](https://github.com/brandyquinlan/Burger)
* [Link to Heroku App - https://quinlan-burger.herokuapp.com/](https://quinlan-burger.herokuapp.com/)

## Installation Instructions
  Run the command "npm i" to install dependencies

### Usage information
  To use the application, run the command "node server.js"

### Licenses
  none

### Contributing
  none

## Tests
 
## DEMO
* [Link to demo - https://drive.google.com/file/d/1ttd8IoJRYvnhtAz0Pf6CCU8LwdqJoazD/view?usp=sharing](https://drive.google.com/file/d/1ttd8IoJRYvnhtAz0Pf6CCU8LwdqJoazD/view?usp=sharing)

## Screenshots
![Screenshots](/public/assets/img/burger_screenshots.jpg)

### Requirements
```
* Eat-Da-Burger is a restaurant app that lets users input the names of burgers they'd like to eat.
* Whenever a user submits a burger name, the app displays the burger on the left side of the page -- waiting to be devoured.
* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger  will move to the right side of the page.
* The app will stores every burger in a database, whether devoured or not.
* [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).
```
#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── .js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── .png
│  
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```
### Functionality

The following npm modules were used:
```
Node.js
MySQL
Express
express-handlebars
JAWSDB
HTML
CSS
JavaScript
```

## Questions
Please contact me with questions:

Brandy Quinlan
<br>
Email: <brandyquinlan@gmail.com>
<br>
Github: [https://github.com/brandyquinlan/](https://github.com/brandyquinlan/)
