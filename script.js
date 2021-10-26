


const Time = ()=>{
  
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();

    if (hour < 10) {
        hour = "0" + hour;
    }


    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds <10) {
        seconds ="0" + seconds;
    } 

    console.log(hour + ":" + minutes + ":" + seconds);

    var EA = "";

    hour > 12 ? EA = "PM" : EA = "AM";

    var input = document.getElementById("clock")
    input.value = `${hour}` + ":" + `${minutes}` + ":" + `${seconds}` + " " + EA
}




var intrvl = setInterval(Time, 1000)

// clearInterval(intrvl);