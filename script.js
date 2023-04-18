const frog = document.querySelector('.frog');
const cars = document.querySelectorAll('.car');
const logs = document.querySelectorAll('.log');
const container = document.querySelector('.container');

let frogLeft = 275;
let frogBottom = 0;
let currentLog = null;
let isMoving = false;

function moveFrog(e) {
  if (isMoving) return;
  switch(e.keyCode) {
    case 37:
      if (frogLeft > 0) frogLeft -= 25;
      break;
    case 38:
      if (frogBottom < 350) frogBottom += 50;
      break;
    case 39:
      if (frogLeft < 550) frogLeft += 25;
      break;
    case 40:
      if (frogBottom > 0) frogBottom -= 50;
      break;
  }
  frog.style.left = frogLeft + 'px';
  frog.style.bottom = frogBottom + 'px';
  checkCollision();
  checkWin();
}

function moveLogs() {
  logs.forEach(log => {
    log.style.left = log.offsetLeft - 2 + 'px';
    if (log.offsetLeft < -150) log.style.left = '600px';
    if (currentLog === log && checkCollision()) {
      frogLeft -= 2;
      frog.style.left = frogLeft + 'px';
    }
  });
}

function moveCars() {
  cars.forEach(car => {
    car.style.left = car.offsetLeft - 4 + 'px';
    if (car.offsetLeft < -100) car.style.left = '600px';
    checkCollision();
  });
}

function checkCollision() {
  let isColliding = false;
 
