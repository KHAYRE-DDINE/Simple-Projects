let inpColor = document.querySelector("input")
let body = document.querySelector("body")

inpColor.oninput = function(){
  console.log(inpColor.value);
  body.style.background = inpColor.value;
}