function toggleNav() {
  var x = document.getElementById("Topnav");
  if(x.className === "main_nav") {
    x.className += " horizontal_nav";
  }else {
    x.className = "main_nav";
  }
}

function shirtToMain() {  
  var secShirt = document.getElementById("shirt");
  secShirt.src = "images/Tshirt2.png";  
}

function shirtToSec() {  
  var mainShirt = document.getElementById("shirt");
  mainShirt.src = "images/Tshirt1.png";  
}
