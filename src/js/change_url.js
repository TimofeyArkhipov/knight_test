"use strict";

let knight = document.getElementById('knight-img-change');
let castle = document.getElementById('castle-img-change');

if (screen.width <850) {
    knight.src='img/man2.png';
    castle.src='img/Слой3.png';
    castle.width='350';
    castle.height='440';
}


window.addEventListener('resize', function () {
    if (screen.width <850) {
        knight.src='img/man2.png';
        castle.src='img/Слой3.png';
        castle.width='350';
        castle.height='440';
    }
    if (screen.width>850) {
        knight.src='img/man.png';
        castle.src='img/bg_c.png';
    }
});

