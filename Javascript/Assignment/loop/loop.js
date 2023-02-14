var weekdays=["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
for (var i=0; i<weekdays.length; i++){
    var x=weekdays[i];
    document.getElementById("sam").innerHTML+="<li>" +i+ "-" + x + "</li>"
}