// Create a Promise that resolves after 2 seconds.

let pk = new Promise((resolve, resject) => {
  setTimeout(() => {
    resolve(" hai this is pro");
  }, 2000);
});

pk.then((msg) => {
  console.log(msg);
});
