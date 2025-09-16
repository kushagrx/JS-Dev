// function Hello(){
//     console.log("After 5 seconds");
// }
// setTimeout(Hello,4000);         //will run after 4 seconds
// console.log("Before");     //will run first

// let promise = new Promise((resolve,reject)=>{
//     console.log("Promise is ongoing");
//     let a = 3-1;
//     if(a==2){
//         resolve("Success");
//     }
//     else{
//         reject("Promise failed 💔");
//     }
// });

function Async(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data 1");
            resolve("Promise resolved");
        }, 4000);
    });
}

function Async2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Data 2");
            resolve("Promise resolved");
        }, 4000);
    });
}

console.log("fetching data 1...")
Async()
    .then((res)=>{
        console.log(res);
        console.log("fetching data 2...");
        Async2()
            .then((res)=>{
                console.log(res);
            });
    });
//This will lead to promise hell