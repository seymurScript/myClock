function clock(){
    let h = document.querySelector(".h")
    let m = document.querySelector(".m")
    let s = document.querySelector(".s")
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second =date.getSeconds();
    let ampm = ''
    if(hour < 12){
        ampm = "AM"
    }
    else if(hour>12){
        hour = hour-12
        ampm = "PM"
    }
    if(hour ==0){
        hour = 12; 
    }
    hour = hour<10 ? `0${hour}`:hour;
    minute = minute<10 ? `0${minute}`:minute;
    second = second<10 ? `0${second}` :second;
    h.innerHTML = `${hour}`
    m.innerHTML = `${minute}`
    s.innerHTML = `${second}`
    setInterval(clock,500)
}
clock()