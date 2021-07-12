"use strict";

var togglebutton = document.getElementsByClassName('toggle-button')[0];
var navbarLinks = document.getElementsByClassName('navbar-links')[0];
togglebutton.addEventListener('click', function () {
  navbarLinks.classList.toggle('active');
});