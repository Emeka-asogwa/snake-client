const {movementKey} = require('./directions'); //,UPKEY,DOWNKEY,LEFTKEY,RIGHTKEY};
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
     } 
    //else if (key === UPKEY) {
    //   connection.write('Move: up');
    // } else if (key === LEFTKEY) {
    //   connection.write('Move: left');
    // } else if (key === DOWNKEY) {
    //   connection.write('Move: down');
    // } else if (key === RIGHTKEY) {
    //   connection.write('Move: right');
    // } else if (key = "m"){
    //   connection.write('Say: Yes! I am a superhero');

    // }
    else if (key in movementKey){
      connection.write(movementKey[key]);
      
    }
  };
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
};


module.exports = { setupInput };