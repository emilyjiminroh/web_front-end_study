const h1 = document.querySelector(".title h1");

function handleTitleClick(){
  h1.style.color = "red";
}
function handleMouseEnter(){
  h1.innerText = "Mouse is here!";
}
function handleMouseLeave(){
  h1.innerText = "Mouse is gone!";
}
function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
  alert("copier!")
}
console.log(document.body.style);
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);

