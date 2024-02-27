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
  console.log("Key pressed:", key);
  if (key === '\u0003') { // ctrl + c
    process.exit(); 
  } else if (key === 'w') { 
    connection.write("Move: UP 🔼");
  } else if (key === 'a') {
    connection.write("Move: LEFT ◀")
  } else if (key === 'd') {
    connection.write("Move: RIGHT ▶")
  } else if (key === 's') {
    connection.write("Move: DOWN 🔽")
  } else if (key === '1') {
    connection.write("Say: Hi");
  } else if (key === '2') {
    connection.write("Say: I'm coming to eat you");
  } else if (key === '3') {
    connection.write("Say: RAWR! 😈");
  }
};

module.exports = { setupInput };
