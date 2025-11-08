let mybutton = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





let contbutton = document.getElementById("contButton");

function bottomFunction() {
  document.body.scrollTop = 5000; // For Safari
  document.documentElement.scrollTop = 5000; // For Chrome, Firefox, IE and Opera
}