let btn1 = document.getElementById("btn1");
let a = 25;
btn1.onclick = () => {
    console.log("Button was clicked");
    a++;
    console.log(a);
}

let box = document.getElementById("dabba");

box.onmouseover = () => {
    box.style.backgroundColor = "red";
}
box.onmouseout = () => {
    box.style.backgroundColor = "green";
}