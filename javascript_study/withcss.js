const h1 = document.querySelector(".title h1");

// function handleTitleClick(){
//   const clickedClass = "active";
//   if(h1.classList.contains(clickedClass)){
//     h1.classList.remove(clickedClass);
//   }  else {
//   h1.classList.add(clickedClass);
//   }
// }

function handleTitleClick(){
  
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
