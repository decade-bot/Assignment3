/* email */
"use strict";
const email = document.getElementById("email");
const text = document.querySelector(".fs--1");
const btnEnter = document.querySelector(".btn-primary");
const show = document.getElementById("show");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const textEmail = function(i){
  text.style.color = "red";
  text.textContent = i;
}
btnEnter.addEventListener("click", function () {
  const answer = email.value;
  if (answer.match(regex)) {
    document.querySelector(".hide").classList.add("d-hidden");
    text.classList.add("d-hidden");
    show.classList.remove("d-hidden");
  } else if (answer === "") {
    // text.textContent = "nothing yet";
    // text.style.color = "red";
    textEmail("Nothing yet");
  } else {
    textEmail("Invalid email");
    // text.textContent = "Invalid email";
    // text.style.color = "red";
  }
});

/* showmore/less */
const reset ={
  hello:"Bruh",
  bruh:"sad"
};
console.log(reset);
const current = document.querySelectorAll(".current"); // the details which having text
const viewMore = document.querySelectorAll(".viewMore--0"); // the overall layouts
const showmore = document.querySelectorAll(".showmore"); //button
const showless = document.querySelectorAll(".showless"); //button
let click = true;
console.log(showmore);
/* anumation from overflow*/
document.addEventListener("animationstart", function (e) {
  if (e.animationName === "fade-in") {
    click = true;
  }
});

document.addEventListener("animationend", function (e) {
  if (e.animationName === "fade-out") {
    e.target.classList.add("d-hidden"); // same condition
    click = true;
  }
});

for (let i = 0; i < showmore.length; i++) {
  current[i].classList.add("d-hidden"); // not really special
  const display = function () {
    /* function*/
    if (click) {
      click = false;
      viewMore[i].classList.remove("fade-in"); // remove the part to dodge error from view less
      current[i].classList.remove("fade-out"); // remove the class we don't need to dodge error

      viewMore[i].classList.add("fade-out"); // animation we want to add the part we want to hide
      setTimeout(function () {
        current[i].classList.add(
          "fade-in"
        ); /* after fade out hidden setTimeout for fade-in */
        current[i].classList.remove("d-hidden");
      }, 400);
    }
  };
  showmore[i].addEventListener("click", display);
}
// close one
for (let i = 0; i < showless.length; i++) {
  showless[i].addEventListener("click", function () {
    if (click) {
      click = false;
      current[i].classList.remove("fade-in"); //remove the moreover animation
      viewMore[i].classList.remove("fade-out");

      current[i].classList.add("fade-out"); // remove the display we don't want on the screen
      setTimeout(function () {
        /* changing part */
        viewMore[i].classList.add("fade-in"); // add the fade in, doesn't matter if we have it or not at the time
        viewMore[i].classList.remove("d-hidden"); // remove the hidden part that having at the viewmore
      }, 400);
    }
  });
}

/* bonus */
const test = document.querySelectorAll(".align-target");
for (let i = 0; i < current.length; i++) {
  showmore[i].addEventListener("click", function () {
    test[i].classList.add("align-java");
  });
  showless[i].addEventListener("click", function () {
    test[i].classList.remove("align-java");
  });
}
