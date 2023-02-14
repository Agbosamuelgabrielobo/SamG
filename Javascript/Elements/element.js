document.getElementById("state").style.display= "none"
document.getElementById("city").style.display= "none"
document.getElementById("local").style.display= "none"
document.getElementById("province").style.display= "none"

function showOrHide() {
    var country= document.getElementById("country").value
    if(country == "nigeria"){
        document.getElementById("state").style.display= "block"
        document.getElementById("city").style.display= "none"
    }else if(country == "america"){
        document.getElementById("city").style.display= "block"
        document.getElementById("state").style.display= "none"
    }
}

function showP() {
    var province=document.getElementById("america").value
    if (province == "newyork"){
        document.getElementById("province").style.display= "block"
    }else{
        document.getElementById("province").style.display= "none"
    }
}
function showLga() {
    var local=document.getElementById("nigeria").value
    if(local == "benue"){
        document.getElementById("local").style.display= "block"
    }else{
        document.getElementById("local").style.display= "none"
    }
}
   
