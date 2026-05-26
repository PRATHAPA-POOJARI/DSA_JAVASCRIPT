// Delay execution of a function.



setTimeout(()=>{

    function greet(){
        console.log('Hello, World!');
    }
    greet();
    console.log('This will be logged after 2 seconds.');
},2000);