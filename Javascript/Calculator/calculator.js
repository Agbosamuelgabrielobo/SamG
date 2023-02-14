function calculate() {
   var number1=document.getElementById("num1").value 
   var number2=document.getElementById("num2").value
   var operator=document.getElementById("operator").value
   if (operator =="+"){
       var sum=Number(number1) + Number(number2)
       document.getElementById("answer").innerHTML=sum
   }else if (operator =="-"){
       var sum=Number(number1) - Number(number2)
       document.getElementById("answer").innerHTML=sum
   }else if (operator =="*"){
       var sum=Number(number1) * Number(number2)
       document.getElementById("answer").innerHTML=sum
   }else if (operator =="/"){
       var sum=Number(number1) / Number(number2)
       document.getElementById("answer").innerHTML=sum
   }else if (operator =="%"){
       var sum=Number(number1) % Number(number2)
       document.getElementById("answer")
   }
}
