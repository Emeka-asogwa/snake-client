const net = require("net");
const {UPKEY,DOWNKEY,LEFTKEY,RIGHTKEY} = require('./directions');
const {IP,PORT,PASSWORD} = require("./constants");
const connect = function() {
  console.log("Inside connect");
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
    password:PASSWORD,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('data from server',data);
    
  });
  conn.on('connect',() =>{
    conn.write("Name: EME");
    //
    
    // setTimeout( () => {
    //   conn.write(UPKEY)
    //   //conn.write(LEFTKEY);
    // },2000)
    // setTimeout( () => {
    //   conn.write(LEFTKEY);
    // },5000)



  });
  

  return conn;
};

console.log("Connecting ...");



module.exports = { connect };