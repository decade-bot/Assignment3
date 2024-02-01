/* email */
"use strict";
const email = document.getElementById("email");
const text = document.querySelector(".fs--1");
const btnEnter = document.querySelector(".btn-primary");
const show = document.getElementById("show");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnEnter.addEventListener("click", function () {
  const answer = email.value;
  if (answer.match(regex)) {
    document.querySelector(".hide").classList.add("d-hidden");
    text.classList.add("d-hidden");
    show.classList.remove("d-hidden");
  } else if (answer === "") {
    text.textContent = "nothing yet";
    text.style.color = "red";
  } else {
    text.textContent = "Invalid email";
    text.style.color = "red";
  }
});

/* showmore/less */
setTimeout(function(){

},400);
const current = document.querySelectorAll(".current"); // the details which having text
const viewMore = document.querySelectorAll(".viewMore--0"); // the overall layouts
const showmore = document.querySelectorAll(".showmore"); //button
const showless = document.querySelectorAll(".showless");//button

console.log(showmore);
for (let i = 0; i < showmore.length; i++) {
  current[i].classList.add("d-hidden"); // not really special

  showmore[i].addEventListener("click", function () {
    current[i].classList.add("fade-in");  // add class we need inside
    current[i].classList.remove("fade-out"); // remove the class we don't need to dodge error
  
    viewMore[i].classList.add("fade-out"); // animation we want to add the part we want to hide
    viewMore[i].classList.remove("fade-in"); // remove the part to dodge error
    setTimeout(function(){
      current[i].classList.remove("d-hidden"); // wait time for animation easeout to remove and add visbility so animation could run  with class fade
      current[i].classList.add("visibility"); // add from a period of time to run animation
    },400);

    document.addEventListener("animationstart", function (e) { // if the animation runs that having name = fade in, so it will remove visibility
      if (e.animationName === "fade-in") {
        e.target.classList.remove("visibility"); // show the animation by delete visibility at the start
        e.target.classList.remove("fade-in"); //same reason because we still have face-in at the last showmore
      }
    });

    document.addEventListener("animationend", function (e) { // constrast, if fade out it will hide it by adding class
      if (e.animationName === "fade-out") { 
        e.target.classList.add("d-hidden"); // add hidden to viewmore afterthe animation end
        e.target.classList.remove("fade-out");
      }
    });
  });
}

for (let i = 0; i < showless.length; i++) {
  showless[i].addEventListener("click", function () {
    viewMore[i].classList.add("fade-in"); // add the fade in, doesn't matter if we have it or not at the time
    current[i].classList.add("fade-out"); // remove the display we
    setTimeout(function(){
      /* changing part */
      viewMore[i].classList.add("visibility"); // add the visible to view
      viewMore[i].classList.remove("d-hidden"); // remove the hidden part that having at the viewmore
    },400);

    document.addEventListener("animationstart", function (e) {
      if (e.animationName === "fade-in") {
          e.target.classList.remove("visibility");
      }
    });
    
    document.addEventListener("animationend", function (e) {
      if (e.animationName === "fade-out") {
        e.target.classList.add("d-hidden"); // same condition

      }
    });
  });
}

/* bonus */
const test = document.querySelectorAll(".align-target");
for(let i = 0; i < current.length;i++){
  showmore[i].addEventListener("click",function(){
    test[i].classList.add("align-java");
  })
  showless[i].addEventListener("click",function(){
    test[i].classList.remove("align-java");
  })
}