const countDown = document.querySelector(".countDown");

const xmas = new Date("2021-12-24").getTime();

function Dday(){
  const date = new Date().getTime();
  const gap = xmas-date;
  const day = String(Math.ceil(gap/(60*60*24*1000))).padStart(2,"0");
  const hours = String(Math.ceil((gap%(60*60*24*1000)) / (1000*60*60))).padStart(2,"0");
  const minutes = String(Math.ceil((gap%(60*60*1000))/(1000*60))).padStart(2,"0");
  const seconds = String(Math.ceil((gap%(60*1000))/1000)).padStart(2,"0");
  countDown.innerText=`${day}d ${hours}h ${minutes}m ${seconds}s`;
}

Dday();
setInterval(Dday,1000);