var fs = require("fs");
var { promisify } = require("util");
var beep = () => process.stdout.write("\x07");
var unlink = promisify(fs.unlink);
var writeFile = promisify(fs.writeFile);

var delay = (seconds) =>
  new Promise((res) => {
    setTimeout(res, seconds * 1000);
  });

const doStuffSequentially = () =>
  Promise.resolve()
    .then(() => {
      console.log("starting");
    })
    .then(() => delay(1))
    .then(() => "waiting")
    .then(console.log)
    .then(() => delay(2))
    .then(() => writeFile("file.txt", "Sample File..."))
    .then(beep)
    .then(() => console.log("file.txt created"))
    .then(() => delay(3))
    .then(() => unlink("file.txt"))
    .then(beep)
    .then(() => console.log("file.txt removed"))
    .catch(console.error);

doStuffSequentially();