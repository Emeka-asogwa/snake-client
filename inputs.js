const {UPKEY,DOWNKEY,LEFTKEY,RIGHTKEY} = require('./directions');
// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = key => {
    if (key === '\u0003') {
      process.exit();
    } else if (key === UPKEY) {
      connection.write('Move: up');
    } else if (key === LEFTKEY) {
      connection.write('Move: left');
    } else if (key === DOWNKEY) {
      connection.write('Move: down');
    } else if (key === RIGHTKEY) {
      connection.write('Move: right');
    } 
  };
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
};


module.exports = { setupInput };