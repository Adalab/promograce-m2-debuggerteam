"use strict";function handlerGoHome(){return window.location.href="home.html"}function getFocus(){homeBtn.focus()}const homeBtn=document.querySelector(".layout-page__button");homeBtn.addEventListener("click",handlerGoHome);const getBody=document.querySelector(".layout");getBody.addEventListener("click",getFocus);