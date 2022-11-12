

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let currentTime = hour + ":"
    + min + ":" + sec ;
    let hh= min+ ":" +sec;
    var clicked = false;
           if(min==60){
            setInterval(
                function () {
                  var randomColor = Math.floor(Math.random()*16777215).toString(16);
                  document.body.style.backgroundColor = "#"+randomColor;
                },1000);
           }
    document.getElementById("clock")
    .innerHTML = currentTime;
  
}



showTime();