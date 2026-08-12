The Rest parameter (...) is mainly used in these situations:

Dynamic functions – when we don't know how many arguments will be passed.

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

sum(10, 20, 30, 40);

Destructuring – to collect the remaining values.

const [first, ...remaining] = [10, 20, 30, 40];

console.log(first);      // 10
console.log(remaining);  // [20, 30, 40]

React props – to collect remaining props.

function User({ name, ...otherProps }) {
    console.log(name);
    console.log(otherProps);
}