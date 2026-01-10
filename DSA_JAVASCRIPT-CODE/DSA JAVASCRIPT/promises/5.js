let pk = new Promise((resolve, reject) => {
  let result = true;

  if (result) {
    resolve("hai");
  } else {
    reject(" not");
  }
});

pk.then((msg) => {
  console.log(msg);
});

pk.catch((err) => {
  console.log(err);
});
