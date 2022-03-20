function toggleNav() {
  var x = document.getElementById("Topnav");
  if(x.className === "main_nav") {
    x.className += " horizontal_nav";
  }else {
    x.className = "main_nav";
  }
}