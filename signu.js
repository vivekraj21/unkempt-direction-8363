var signupArr =JSON.parse(localStorage.getItem("signUpDatails")) || [];
 function submit1(){
    event.preventDefault();
    var signupObj = {
      email: document.querySelector("#email").value,
      
      pass: document.querySelector("#pass").value,
    };
    
    var pass2 = document.querySelector("#pass2").value;
    if(signupObj.pass==pass2 && signupObj.pass.length>=8 &&  signupObj.pass !== "" && signupObj.email !== ""){
      signupArr.push(signupObj);
    console.log(signupArr);
    localStorage.setItem("signUpDetails", JSON.stringify(signupArr));
    window.location.href="Login.html"

    }
   else{
     alert(" Please fill the details Carefully");
   }

    
  
 }