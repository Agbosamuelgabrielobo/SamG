function checkAdmission() {
    var jambscore=document.getElementById("jambscore").value
    var cutoff=180
    var max=400
    var min=0
if(jambscore== "") {
        document.getElementById("message").innerHTML= "Please input your jambscore"
    }
else if(jambscore >= cutoff && jambscore <=max ){
    document.getElementById("message").innerHTML= "You have been granted admission"
}else if(jambscore >min && jambscore< cutoff){
    document.getElementById("message").innerHTML= "You've not been granted admission"
}else if(jambscore>max){
        document.getElementById("message").innerHTML= "Your score cannot be greater than 400"
}else if(jambscore<=min){
    document.getElementById("message").innerHTML= "Invalid input"
}else{
    document.getElementById("message").innerHTML= "No admission"
}
}
