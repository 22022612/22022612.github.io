const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#a4d8d8",
  "#9bcfd6",
  "#92c6ce",
  "#89bdc6",
  "#80b4be",
  "#77abb6",
  "#6ea2ae",
  "#6599a6",
  "#5c90a0",
  "#538798",
  "#4a7e90",
  "#417588",
  "#386c80",
  "#2f6378",
  "#265a70",
  "#1d5168",
  "#14485f",
  "#0b3f57",
  "#02364f",
  "#002d47",
  "#00243f",
  "#001b37"
  
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
