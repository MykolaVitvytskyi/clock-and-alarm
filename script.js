function getTime(){
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10){
    hours = "0" + hours;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  if (seconds < 10){
    seconds = "0" + seconds;
  }

  return `${hours}:${minutes}:${seconds}`;
}

let span = document.querySelector('.clock');
function clock(){
  const fullTime = getTime();
  span.innerText =  fullTime;
}

document.querySelector('#btn-1').onclick = () =>{
  const inputValue = document.querySelector("#alarmClock-1").value;

  const inputTime = inputValue.slice(0,2)*60 + +inputValue.slice(3,5);
  const timeNow = getTime().slice(0,2)*60 + +getTime().slice(3,5);
  const timeNowSeconds = getTime().slice(6,8)* 1000;

  if(inputTime > timeNow){
    const timer = (inputTime-timeNow)*60000 -  timeNowSeconds;
    setTimeout('alert("Будильник сработал!!!")', timer);
  }else{
    const timer = (1440-(timeNow-inputTime))*60000 - timeNowSeconds;
    setTimeout('alert("Будильник сработал!!!")', timer);
  }
}

document.querySelector('#btn-2').onclick = () =>{
  let valueHours = document.querySelector("#alarmClockHours").value;
  let valueMinutes = document.querySelector("#alarmClockMinutes").value;
  let valueSeconds = document.querySelector("#alarmClockSeconds").value;

  valueHours *= 3600 * 1000;
  valueMinutes *= 60000;
  valueSeconds *= 1000;

  const timer =  valueHours + valueMinutes + valueSeconds;
  setTimeout('alert("Будильник сработал!!!")', timer);
}


clock();
setInterval("clock()", 1000);
