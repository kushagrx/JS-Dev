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

box.addEventListener("click", () => {
    box.style.backgroundColor = "blue";
});


const toggle = document.querySelector("#btn2");
let color = "light";
toggle.addEventListener("click", () => {
    if(color === "light"){
        document.body.style.backgroundColor = "#000000ff";
        document.body.style.color = "#fff";
        toggle.textContent = "Toggle light mode";
        color = "dark";
    }
    else{
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000000ff";
        toggle.textContent = "Toggle dark mode";
        color = "light";
    }
});