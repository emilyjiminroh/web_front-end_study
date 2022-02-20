const h1 = document.querySelector("h1");
document.body.style.backgroundColor = "tomato";

function handleResize() {
  let windowWidth = window.innerWidth;
  if(windowWidth<=800){
    document.body.style.backgroundColor = "tomato";
  } else if (windowWidth<=1000){
    document.body.style.backgroundColor = "purple";
  }  else{
    document.body.style.backgroundColor = "yellow";
  }
  //console.log(windowWidth);
}

window.addEventListener("resize", handleResize);
