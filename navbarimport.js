import navbar from"./component/navbar.js";

console.log(navbar);
document.getElementById("navbar").innerHTML=navbar();

let plan=document.getElementById("plan");
plan.addEventListener("click",function(){

    console.log("my");
})
