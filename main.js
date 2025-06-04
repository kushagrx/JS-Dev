//filtering out marks of students who scored more than 90 
let arr1=[50,69,97,92,88,87,98,93,77];
let marks=arr1.filter((val)=>{
    return val>=90;
});
console.log(marks);


let n=prompt("Enter a number");
let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;  //{1(0),2(1),3,4,5...}
}
console.log(arr);

//over here calculating the factorial operation on arrays and easing the process using the reduce function
const factorial=arr.reduce((result,current)=>{
    return result*current;
})
console.log(factorial);