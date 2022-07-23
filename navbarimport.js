import navbar from"./component/navbar.js";

console.log(navbar);
document.getElementById("navbar").innerHTML=navbar();

let plan=document.getElementById("plan");
plan.addEventListener("click",function(){

    window.location.href="./plan.html"
    
})

// document.querySelector("#plan").addEventListener("click",function(){
//     document.querySelector("#popup").style.display="flex"
//         })
        
//  document.querySelector("#crossbtn").addEventListener("click",function(){
//  document.querySelector("#popup").style.display="none"
//  })       
 
})

document.getElementById("continuewithplan").addEventListener("click",function(){
  window.location.href="address.html"

 })






 