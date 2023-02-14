function checkAge() {
    var age= document.getElementById("agechecker").value
    var number= Number(age)
    if(age<= 17 && age >=1){
        document.getElementById("check").innerHTML= "You are a child"
    }else if(age <= 29 && age >=18){
        document.getElementById("check").innerHTML= "You are a teenager"
    }else if(age<= 150 && age >=30){
        document.getElementById("check").innerHTML= "You are an adult"
    }else{
        document.getElementById("check").innerHTML= "Error"
    }
}