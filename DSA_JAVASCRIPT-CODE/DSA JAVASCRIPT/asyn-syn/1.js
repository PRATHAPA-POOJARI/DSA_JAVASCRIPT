
function asyncFunction() {
    console.log("Step 1");
    setTimeout(() => {
      console.log("Step 2 (after 2 seconds)");
    }, 0); // Runs AFTER 2 seconds
  
    console.log("Step 3");
  }
  asyncFunction();
  console.log("Step 4");
  