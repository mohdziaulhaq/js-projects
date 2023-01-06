let button = document.getElementById("button");
let canvas = document.getElementById("canvas");
button.addEventListener("click",()=>{
    let color = "#";
    let hex = "0123456789ABCDEF";
    for(let i=0; i<6;i++)
    color = color + hex[Math.floor(Math.random()*16)];
    canvas.style.backgroundColor = color;
})