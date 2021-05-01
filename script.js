let box = document.querySelector('.box');
let boxParent = document.querySelector('.boxParent');
let pText = document.querySelector('.pText');

document.querySelector('.boxParent').addEventListener('mousemove', (e) => {
  let coordX = relativeCoords(e).x - 500;
  let coordY = relativeCoords(e).y - 250;

  pText.innerText = `X = ${coordX} || Y = ${coordY}`;
  box.style.transform = `rotateY(${coordX / 40}deg) rotateX(${
    -coordY / 40
  }deg)`;
  [...document.querySelectorAll('.subBox')].forEach((box) => {
    box.style.boxShadow = `${-coordX / 20}px ${-coordY / 20}px 10px #00263144,
    0px 0px 10px #00263144`;
  });
});

document.querySelector('.boxParent').addEventListener('mouseover', (e) => {
  box.classList.remove('active');
});

document.querySelector('.boxParent').addEventListener('mouseout', (e) => {
  box.classList.add('active');
});

function relativeCoords(event) {
  var bounds = event.currentTarget.getBoundingClientRect();
  var x = event.clientX - bounds.left;
  var y = event.clientY - bounds.top;
  return { x: x, y: y };
}
