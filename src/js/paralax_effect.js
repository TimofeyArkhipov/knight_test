'use strict'
let elem = document.querySelector('.knight');

document.addEventListener('mousemove', (e)=>{
    let speed = elem.getAttribute('data');
    let x = (window.innerWidth - e.pageX*speed)/100;
    elem.style.transform = `translateX(${x}px)`;
    console.log(speed);
});
