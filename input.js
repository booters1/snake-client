// Function to setup input from stdin
const setupInput = function () {
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
  }
};

module.exports = { setupInput };
