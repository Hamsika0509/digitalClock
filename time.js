function Showtime(){
    var date= new Date;
    var hour=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    if(hour<10)
    hour=0+hour;
    if(min<10)
    min=0+min;
    if(sec<10)
    sec=0+sec;
    var time=hour+":"+min+ ":"+ sec;
    document.getElementsByid("A").innerHTML=time;
    setTimeout(Showtime,1000);
   
}
Showtime();