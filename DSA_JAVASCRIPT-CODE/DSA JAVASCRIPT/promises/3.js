
let sp = new Promise((resolve,reject)=>{
let result = 'true';
if(result){
  resolve('hai')
}
else {


  reject('you are rejected')
}

})


sp.then((msg)=>{

  console.log('resolve',msg)
})
.catch((err)=>{

  console.log('reject',err)

})










