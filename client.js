const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131', // IP address here,
    port: 50542, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('data from server',data);
    
  });
  conn.on('connect',() =>{
    conn.write("Name: EME");

  });

  return conn;
};

console.log("Connecting ...");



module.exports = connect;