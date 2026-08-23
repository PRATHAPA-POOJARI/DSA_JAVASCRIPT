function debounce(fn, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn();
        }, delay);
    };
}


function search() {
    console.log("API Call");
}


const debouncedSearch = debounce(search, 2000);


// Calling multiple times
debouncedSearch();

setTimeout(() => {
    debouncedSearch();
}, 500);

setTimeout(() => {
    debouncedSearch();
}, 1000);

setTimeout(() => {
    debouncedSearch();
}, 1500);


