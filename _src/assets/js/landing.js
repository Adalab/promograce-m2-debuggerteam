"use strict";

//Acción boton
function handlerGoHome() {
  const getHome = (window.location.href = "home.html");
  return getHome;
}
function getFocus() {
  homeBtn.focus();
}
const homeBtn = document.querySelector(".layout-page__button");

homeBtn.addEventListener("click", handlerGoHome);
debugger;
// Focus onclick
const getBody = document.querySelector(".layout");

getBody.addEventListener("click", getFocus);
