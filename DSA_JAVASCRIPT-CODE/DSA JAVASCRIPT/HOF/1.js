

// parameter and argument examples

function greet(name){
    return `hell ${name}`
}

function withExci(func) {
    return function (name) {
    return func(name) + " fj"

    }
}