const delay = (seconds) =>
  new Promise((resolves, rejects) => {
    throw new Error("MAYDAY");
    setTimeout(() => {
      resolves("the long delay has ended");
    }, seconds * 1000);
  });

delay(1)
  .then((message) => {
    console.log(message);
  })
  .then(() => {
    console.log("hello world");
  })
  .catch((err) => {
    console.error(err);
  });

console.log("end first tick");
