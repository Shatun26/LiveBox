let box = document.querySelector('.box');
let boxParent = document.querySelector('.boxParent');
let pText = document.querySelector('.pText');

document.querySelector('.boxParent').addEventListener('mousemove', (e) => {
  let coordX = relativeCoords(e).x - 325;
  let coordY = relativeCoords(e).y - 325;

  pText.innerText = `X = ${coordX} || Y = ${coordY}`;
  box.style.transform = `rotateY(${coordX / 20}deg) rotateX(${-coordY / 20}deg)`;
  // document.querySelector('.subBox').style.boxShadow = `${-coordX/40}px ${-coordY/40}px 8px black`;
  document.querySelector('.box').style.boxShadow = `${-coordX / 40}px ${
    -coordY / 40
  }px 8px black`;

  [...document.querySelectorAll('.subBox')].forEach((box) => {
    box.style.boxShadow = `${-coordX / 40}px ${-coordY / 40}px 8px #57213c`;
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
