function register(){
     var fullname = document.getElementById("fullname").value;
     var email = document.getElementById("email").value;
     var phone = document.getElementById("phone").value;
     var confirmemail = document.getElementById("confirmemail").value;
    
    if(fullname == "" || email == "" || phone == "" ||  confirmemail == ""){
     document.getElementById("message").innerHTML = "All inputs are required";
     }else if ((!fullname.match(/^[A-Za-z ]+$/)) || fullname.length > 50){
     document.getElementById("message").innerHTML = "Please enter a valid full name";
     }else if ((!email.match(/\S+@\S+\.\S+/)) || email.length > 50){
     document.getElementById("message").innerHTML = "Please enter a valid email";
     }else if (email.length < 5 || confirmemail.length < 5){
     document.getElementById("message").innerHTML = "Password should not be less than 5 characters";
     }else if (email !== confirmemail){
     document.getElementById("message").innerHTML = "Email and confirm email do not match";
     }else if(!phone.match(/^\d{13}$/)){
         document.getElementById("message").innerHTML= "Input a valid phone number"
     }else{
     document.getElementById("message").innerHTML = "Registration Successful";
     }
}
     
    