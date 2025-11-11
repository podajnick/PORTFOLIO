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

//nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno

let activeSlideNumber = 1

let dot1 = document.querySelector("#dot1")
let dot2 = document.querySelector("#dot2")
let dot3 = document.querySelector("#dot3")
let dot4 = document.querySelector("#dot4")
let dot5 = document.querySelector("#dot5")
let dot6 = document.querySelector("#dot6")

let slide1 = document.querySelector("#slide1")
let slide2 = document.querySelector("#slide2")
let slide3 = document.querySelector("#slide3")
let slide4 = document.querySelector("#slide4")
let slide5 = document.querySelector("#slide5")
let slide6 = document.querySelector("#slide6")

let showSlide1 = () => {
    let activeElement = document.querySelector(".active");
    activeElement.classList.remove("active");
    slide1.classList.add("active")
}
let showSlide2 = () => {
    let activeElement = document.querySelector(".active");
    activeElement.classList.remove("active");
    slide2.classList.add("active")
}
let showSlide3 = () => {
    let activeElement = document.querySelector(".active");
    activeElement.classList.remove("active");
    slide3.classList.add("active")
}
let showSlide4 = () => {
    let activeElement = document.querySelector(".active");
    activeElement.classList.remove("active");
    slide4.classList.add("active")
}
let showSlide5 = () => {
    let activeElement = document.querySelector(".active");
    activeElement.classList.remove("active");
    slide5.classList.add("active")
}
let showSlide6 = () => {
    let activeElement = document.querySelector(".active");
    activeElement.classList.remove("active");
    slide6.classList.add("active")
}

dot1.addEventListener("click", showSlide1)
dot2.addEventListener("click", showSlide2)
dot3.addEventListener("click", showSlide3)
dot4.addEventListener("click", showSlide4)
dot5.addEventListener("click", showSlide5)
dot6.addEventListener("click", showSlide6)

//nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno //nowe-okno

let chooseProj1 = document.querySelector("#I")
let chooseProj2 = document.querySelector("#II")
let chooseProj3 = document.querySelector("#III")
let chooseProj4 = document.querySelector("#IV")
let chooseProj5 = document.querySelector("#V")
let chooseProj6 = document.querySelector("#VI")
let chooseProj7 = document.querySelector("#VII")
let chooseProj8 = document.querySelector("#VIII")
let chooseProj9 = document.querySelector("#IX")

let noweOkno = document.querySelector(".nowe-okno")

let exit = document.querySelector(".exit")

let showNoweOkno = () => {
  noweOkno.style.display = "block"
}

let zamknijOkno = () => {
  noweOkno.style.display = "none"
}

exit.addEventListener("click", zamknijOkno)

chooseProj1.addEventListener("click", showNoweOkno)
chooseProj2.addEventListener("click", showNoweOkno)
chooseProj3.addEventListener("click", showNoweOkno)
chooseProj4.addEventListener("click", showNoweOkno)
chooseProj5.addEventListener("click", showNoweOkno)
chooseProj6.addEventListener("click", showNoweOkno)
chooseProj7.addEventListener("click", showNoweOkno)
chooseProj8.addEventListener("click", showNoweOkno)
chooseProj9.addEventListener("click", showNoweOkno)
