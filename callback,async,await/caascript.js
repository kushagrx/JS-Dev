function Hello(){
    console.log("After");
}
setTimeout(Hello,4000);         //will run after 4 seconds
console.log("Before");     //will run first

let promise = new Promise((resolve,reject)=>{
    console.log("Promise is ongoing");
    let a = 3-1;
    if(a==2){
        resolve("Success");
    }
    else{
        reject("Promise failed 💔");
    }
});








// promise.then((message)=>{
//     console.log("This is in the then " + message);
// }).catch((message)=>{
//     console.log("This is in the catch " + message);
// });