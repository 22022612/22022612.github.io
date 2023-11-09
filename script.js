let mtfuji = document.getElementById('mtfuji')
let flower2 = document.getElementById('flower2')
let hill = document.getElementById('hill')
let PD = document.getElementById('PD')
let PDParalaxbg = document.getElementById('PDParalaxbg')
let text = document.getElementById('text')
let flower = document.getElementById('flower')

const stoppingPoint = 500;

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    flower.style.left = value * -0.6 + 'px';
    flower.style.top = value * -0.3 + 'px';
    mtfuji.style.top = value * -0.5 + 'px';

    if (value < stoppingPoint) {
        text.style.marginTop = value * 2.5 + 'px';
    }
});
