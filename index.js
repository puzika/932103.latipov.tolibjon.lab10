'use strict';

const curtain = document.querySelector('.curtain');
const lamp = document.querySelector('.lamp');
const light = document.querySelector('.light');

curtain.addEventListener('click', function () {
   curtain.classList.add('curtain--hidden');
});

curtain.addEventListener('mouseover', function () {
   curtain.classList.add('curtain--move');
});

curtain.addEventListener('mouseout', function () {
   curtain.classList.remove('curtain--move');
});

lamp.addEventListener('click', function (e) {
   if (e.target.classList.contains('light')) return;

   light.classList.toggle('light--hidden');
})