const button = document.querySelector("button");
const body = document.querySelector("body");

const colors = ["violet","indigo","blue","green","yellow","orange","red","burlywood","grey","brown","aqua","azure"]

body.style.backgroundColor="pink"

button.addEventListener("click",function(){
   const colorIndex = parseInt(Math.random()*colors.length);
   console.log(colorIndex);
   body.style.backgroundColor=colors[colorIndex];
});