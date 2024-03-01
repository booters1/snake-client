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

const handleUserInput = function (key) {
  console.log("Key pressed:", key);

  const actions = {
    '\u0003': () => process.exit(), // ctrl + c
    'w': () => connection.write("Move: up"),
    'a': () => connection.write("Move: left"),
    'd': () => connection.write("Move: right"),
    's': () => connection.write("Move: down"),
    '1': () => connection.write("Say: Hi"),
    '2': () => connection.write("Say: I'm coming to eat you"),
    '3': () => connection.write("Say: RAWR! 😈"),
  };

  const action = actions[key];
  if (action) {
    action();
  }
};


module.exports = { setupInput };
