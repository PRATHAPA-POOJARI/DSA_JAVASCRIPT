// Use try/catch inside an async function to handle a rejected Promise  



function getData() {
    return new Promise((resolve, reject) => {
        reject("something went wrong")

    });
}

async function pk() {


    try {
        let result = await getData();

        console.log(result)

    }
    catch (err) {
        console.log(err)
    }
}

pk()