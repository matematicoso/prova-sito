const btn = document.getElementById("searchButton");
const input = document.getElementById("searchBox");
function inputField(){
  if (input.classList.contains("clicked")){
    input.classList.remove("clicked");
  }
  else{
    input.classList.add("clicked");
  }
  console.log(input.classList);
}
btn.addEventListener("click", inputField);
