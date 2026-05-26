// Cancel a timeout using clearTimeout.

 const pl=setTimeout(() => {
  console.log('This will not be logged.');
}, 1000);

clearTimeout(pl);

// console.log(pl)