const btn = document.getElementById("searchButton");
function inputField(){
  console.log(btn.classList)
  if (btn.classList.contains("clicked")){
    btn.classList.remove("clicked");
  }
  else{
    btn.classList.add("clicked");
  }
  console.log(btn.classList)
}
btn.addEventListener("click", inputField)
