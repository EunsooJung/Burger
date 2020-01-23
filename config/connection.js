/**
 * Connection to Heroku or Local MySQL DB
 */
var mysql = require('mysql');
var connection;

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

connection.connect(function(err) {
  if (err) {
    console.err('burger_db connecting err: ' + err.stack);
    return;
  }
  console.log('Connected burger_db as id: ' + connection.threadId);
});

module.exports = connection;
