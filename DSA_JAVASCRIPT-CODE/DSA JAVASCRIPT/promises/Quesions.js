// Level 1 — Beginner

// Create a Promise that resolves with "Hello World" and print it using .then() -completed
// Create a Promise that rejects with "Something went wrong" and handle it with .catch()-completed
// Create a Promise that resolves after 3 seconds with the message "Done!"
// Write a Promise and use .finally() to print "Completed" regardless of result


// Level 2 — Basic Chaining

// Create a Promise that resolves with 5, then double it in .then(), then add 10 in the next .then() and print the final result
// Fetch a number from a resolved Promise and return its square in the next .then()
// Create a chain of 3 .then() calls — each one adds 1 to the previous value


// Level 3 — Error Handling

// Create a Promise chain where the second .then() throws an error — catch it with .catch()
// Write a function that returns a rejected Promise if a number is negative, else resolves with the number
// Handle multiple errors in a chain using a single .catch() at the end


// Level 4 — Promise Methods

// Use Promise.all() to resolve 3 Promises and print all results together
// Use Promise.allSettled() where one Promise rejects — print all results
// Use Promise.race() with two Promises — one resolves in 1s, another in 3s
// Use Promise.any() where the first two Promises reject but the third resolves


// Level 5 — Async/Await

// Rewrite a .then() chain using async/await
// Write an async function that waits 2 seconds and then returns "Hello"
// Use try/catch inside an async function to handle a rejected Promise
// Write an async function that calls 3 Promises one after another using await



Level 6 — Intermediate Promises
Create a delay(ms) function that returns a Promise and resolves after the given milliseconds.
Create 3 functions getUser(), getProfile(), and getPosts() that return Promises. Call them one after another using async/await.
Create a Promise that resolves with "User ID: 101". In the next .then(), return another Promise that resolves with "User details".
Create a rejected Promise and recover from the error using .catch() by returning a successful value.
Create a Promise that resolves after 2 seconds and use .then(), .catch(), and .finally().
Create a rejected Promise and use .catch() and .finally() to handle it.
Create 3 Promises that each take 2 seconds. Execute them sequentially using await.
Create 3 Promises that each take 2 seconds. Execute them together using Promise.all().
Create 3 Promises where one rejects. Use Promise.all() and handle the error.
Create 4 Promises where 2 resolve and 2 reject. Use Promise.allSettled() and print the results.
Level 7 — Promise Methods
Use Promise.race() with one Promise rejecting after 1 second and another resolving after 3 seconds.
Use Promise.race() with two Promises that resolve after different times.
Use Promise.any() with 4 Promises where the first two reject and the third resolves.
Use Promise.any() where all 3 Promises reject. Handle the resulting error.
Use Promise.all() with async/await to resolve 3 Promises and print their results.
Use Promise.all() with 5 Promises and destructure the returned array.
Create 3 Promises with different delays and determine which one finishes first using Promise.race().
Create 5 Promises where only one resolves. Use Promise.any() to get the successful result.
Compare the behavior of Promise.all(), Promise.allSettled(), Promise.race(), and Promise.any() using the same 3 Promises.
Create 3 Promises where all reject and compare the result of Promise.all() and Promise.any().
Level 8 — Async/Await
Rewrite a 3-step .then() chain using async/await.
Create an async function that waits 3 seconds and returns "Hello World".
Create an async function that handles a rejected Promise using try/catch.
Create an async function that returns a Promise and handle its result using .then().
Create an async function that throws an error and handle it using .catch().
Create 3 async functions and call them sequentially using await.
Create 3 async functions and execute them simultaneously using Promise.all().
Create an async function that calls getUser(), getProfile(), and getPosts() sequentially.
Create an async function that calls 3 Promises and stops execution if any Promise rejects.
Create an async function that calls 3 Promises and continues execution even if one fails.
Level 9 — Real-World Promise Practice
Create a fake loginUser() API using a Promise.
Create a fake getUserProfile() API that runs after login.
Create a fake getUserPosts() API that runs after getting the profile.
Build a complete flow: login → profile → posts using async/await.
Add error handling to the login → profile → posts flow.
Create a fake API that randomly succeeds or fails.
Create a retry mechanism that tries a failed Promise 3 times.
Create a Promise timeout mechanism.
Create a function that runs 5 async tasks sequentially.
Create a function that runs 5 async tasks in parallel using Promise.all().
Level 10 — Interview-Level
What is the difference between Promise.all() and Promise.allSettled()?
What is the difference between Promise.race() and Promise.any()?
What happens when one Promise rejects inside Promise.all()?
What happens when all Promises reject inside Promise.any()?
What happens if you forget to use await inside an async function?
What happens when an async function throws an error?
Explain why async functions always return a Promise.
Explain the difference between sequential and parallel Promise execution.
Create a Promise chain with 5 .then() calls and handle errors using one .catch().
Convert a complex Promise chain into clean async/await code.
