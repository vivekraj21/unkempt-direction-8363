var regdUsers = JSON.parse(localStorage.getItem("signUpDetails"));
  console.log(regdUsers);

  function submit2() {
    

    var mail = document.querySelector("#mail").value;
    var pass1 =document.querySelector("#pass1").value;
 

    var flag= false;
    for (var i = 0; i < regdUsers.length; i++) {
      if (regdUsers[i].email == mail && regdUsers[i].pass == pass1) {
        flag=true;

      } else{
        flag=false;
      }
    }
    if(flag==true){
        
        alert("Login Success");
        window.location.href="./navbar.html";
    }
    else{
        alert("Login Failed Please fill correct details");

    }
  }