# Burger Web Application

Create a burger web applicaion with MySQL, Node, Express, Handlebars and applying ORM, MVC Pattern then deploy to heroku.

- [Burger-Web-Application: Heroku Demo](https://infinite-peak-39480.herokuapp.com/)

- [Applied to My Reponsive Portfolio](https://eunsoojung.github.io/Responsive-Portfolio/portfolio.html)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```bash
# Install body-parser
npm i body-parser

# Install middleware
npm i express

# Install UI Templete Engine
npm i express-handlebars

# Install MySQL
npm i mysql

# Run
node server.js or npm start (using nodemon)
```

## Preview

[![Burger-Web-App](https://github.com/EunsooJung/Burger/blob/master/public/assets/img/Burgers-Demo.gif)](https://github.com/EunsooJung/Burger/blob/master/public/assets/img/Burgers-Demo.gif)

## Usage

### Basic Usage

To get Note Taker, after downloading, you need to make sure Git Bash terminal open and looking at the correct folder. When you are within the correct location, you may type the following commands to ask her for information:

- node server.js

### Guidelines:

- Proceeds as follows:

To use this applicaion, Clone the applicaion to your local git repository or directory:

- In your terminal, git clone https://github.com/EunsooJung/Burger.git

To start:

- You have to install npm packages depend on my package.json file: "npm install"
- Open your terminal then "node server.js"

### Code Snippet

- Project structure

  [![Burger-Project-Structure](https://github.com/EunsooJung/Burger/blob/master/public/assets/img/burger-prj-structure.png)]

- Source Code Check point

  1.  folder "config": It has two files 'connection.js' and 'orm.js'

           - connection.js: To connection to mysql or heroku mysql database

           ```javascript
           if (process.env.JAWDB_URL) {
             connection = mysql.createConnection(process.env.JAWDB_URL);
           } else {
             connection = mysql.createConnection({
               host: 'nba02whlntki5w2p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
               user: 'jvqzqgkg2h65um00',
               password: 'xbsqx1w226e6qjes',
               database: 'pcuy624fcat5xziy'
               /*
                host: 'localhost',
                user: 'root',
                password: 'password',
                database: 'burgers_db'
            */
             });
           }
           ```

           - orm.js: It's define the object-relational mapping logic.
             - Implemented helper function to convert object key/value pairs to SQL syntax

           ```javascript
           function objToSql(ob) {

            var arr = [];
            // loop through the keys and push the key/value as a string int arr
            for (var key in ob) {
              var value = ob[key];
              // check to skip hidden properties
              if (Object.hasOwnProperty.call(ob, key)) {
              // if string with spaces, add quotations (Cheese Burger => 'Cheese Burger')
                if (typeof value === "string" && value.indexOf(" ") >= 0) {
                  value = "'" + value + "'";
                }
                arr.push(key + "=" + value);
              }
            }
            // translate array of strings to a single comma-separated string
            return arr.toString();
          }
          ```

  2.  Models layer: ** burger.js **:
      - Implements to call the ORM functions using burger specific input for the ORM.

  ```javascript
  var burger = {
  selectAll: function(cb) {
    orm.selectAll('burger', function(res) {
      cb(res);
    });
  },
  ```

  3. View layer: Applied handlebars template engine

  - views/layouts/main.handlebars
  - views/index.handlebars

  4. Controllers layer:

  - burgers_controllers.js: Create all of this Burger web application's routes (maps) using a exppress router.

```javascript
// route default landing page
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var burgersObject = {
      burgers: data
    };
    // console.log(burgersObject);
    res.render('index', burgersObject);
  });
});
```

5. server.js:

   - Setup Burger web applicaion's environments (npm package dependencies)
   - Import routes to access.

```javascript
const routes = require('./controllers/burgers_controllers');
```

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.npmjs.com/package/mysql)
- [MVC Patterns](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

## Authors

- **Michael(Eunsoo)Jung**

* [Burger-Web-Application: Demo](https://infinite-peak-39480.herokuapp.com/)
* [My Portfolio](https://eunsoojung.github.io/Responsive-Portfolio/portfolio.html)
* [Link to Github](https://github.com/EunsooJung/Employee-Tracker)
* [Link to LinkedIn](www.linkedin.com/in/eun-soo-jung/)

## License

This project is licensed under the MIT License
