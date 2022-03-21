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

// Sticky menu
window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navBar");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Add contact to the menu on mobile devices
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
  const addContact = document.getElementById("navList");
  addContact.innerHTML += "<li><a href'#'>Contact</a></li>";

  const addWords = document.getElementById ("sentence");
  sentence.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam <b>vulputate dui efficitur</b> ultrices pharetra. Praesent tempor mollis purus nec fringilla vel commodo.";
}

