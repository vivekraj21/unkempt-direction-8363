document.getElementById("btn2").addEventListener("click",collectdata);


function collectdata(){
   let obj = {name:"sanchita kumari",number:"1234567891234567",cvv:"123",date:"05/26"}
   console.log(obj.number)
    
   if(document.getElementById("myNum").value==obj.number&&document.getElementById("date").value==obj.date&&document.getElementById("cvv").value==obj.cvv){

    alert("Plan Successfully Active")
    window.location.href="navbar.html"
    
   }else{
        alert("credential does not match")
   }
   document.getElementById("myName").value="";
   document.getElementById("myNum").value=""; 
   document.getElementById("date").value="";
   document.getElementById("cvv").value="";
}