function pk(){
console.log("wjandjan");
};

function sp(callback){

    callback();
}
sp(pk)



function sp(callback) {  // callback → just a CONTAINER holding pk
    callback();          // callback() → RUNNING what's inside container
}
```

---

## Think of it like a box:
```
callback      →   📦 box containing pk function
callback()    →   📦 open the box and RUN it