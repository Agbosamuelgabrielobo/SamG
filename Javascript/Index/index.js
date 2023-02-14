function red(){
    document.getElementById("header").innerHTML="Red"
    document.getElementById("header").style.color="red"
}
function green(){
  document.getElementById("header").innerHTML="Green"
  document.getElementById("header").style.color="green"
}
function blue(params) {
    document.getElementById("header").innerHTML="Blue"
    document.getElementById("header").style.color="blue"
}
var password="1234"
var confirmpassword=1234
document.write(password===confirmpassword)
document.write(password==confirmpassword)
var email="joel@gmail.com"
var confirmemail="joel@gmail.com "
document.write(email==confirmemail.trim())
document.write(email===confirmemail)
var idcard =true
var facemask =false
document.write(idcard && facemask)
var idcard =true
var facemask =false
document.write(idcard || facemask)
var co=100
var js=200
document.write()
var num1=45
var num2="45"
document.write(num1 !== num2)
var y=13
function add(x,y) {
    var sum= x+y
    document.getElementById("answer").innerHTML=sum
}
    