 function pk() {
    const name = "prathu";
    function mk() {
        console.log(name);
    }
    return mk;
}
let sp = pk();
sp();