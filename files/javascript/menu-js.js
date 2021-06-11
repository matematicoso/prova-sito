const btn = document.getElementById("searchButton");
function inputField(){
  if (btn.classList.contains("clicked")){
    btn.classList.remove("clicked");
  }
  else{
    btn.classList.add("clicked");
  }
  console.log(btn.classList)
}
