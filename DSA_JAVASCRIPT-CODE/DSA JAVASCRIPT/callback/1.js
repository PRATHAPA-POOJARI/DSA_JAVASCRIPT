// Example 1: Preparing Coffee
// Scenario:

// Imagine you’re making coffee.

//     First, you boil water.
//     Once the water is ready, you make coffee.

// You can’t make coffee until the water is boiled. So, we’ll use a callback to run the "make coffee" step only after the water is ready.

// When is a Callback Optional?

// A callback is optional if:

//     The function can operate independently without it.
//     The callback only adds extra behavior, but skipping it does not break the functionality.

Example:
function boilWater(pk) {
  console.log('Boiling water..');
  setTimeout(() => {
    console.log('hai broo');
  pk();
  }, 4000); // Delay of 4 seconds
}

function caffee() {
  console.log('caffee is ready')
}

boilWater(caffee); // Missing a callback function
