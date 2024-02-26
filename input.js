// Function to setup input from stdin

let connection;


const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Function to handle user input
const handleUserInput = function (key) {
  if (key === '\u0003') { // ctrl + c
    process.exit(); 
  } else if (key === 'w') { 
    console.log("Move: UP 🔼");
  } else if (key === 'a') {
    console.log("Move: LEFT ◀")
  } else if (key === 'd') {
    console.log("Move: RIGHT ▶")
  } else if (key === 's') {
    console.log("Move: DOWN 🔽")
  }
};

module.exports = { setupInput };
