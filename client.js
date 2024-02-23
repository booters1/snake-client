const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port: 50541 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // event handler for incoming data
  conn.on("data", (data) => {
    console.log("Server says:", data); // log that data
  });
  
  // event handler for a successful connection
  conn.on("connect", () => {
    console.log("successfully connected to game server");
    conn.write("Name: RH1"); // Writes name to server
    //conn.write("Move: UP"); 
  });

  return conn;
};


module.exports = { connect };