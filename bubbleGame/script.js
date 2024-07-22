var hitrn = 0;
var timer = 60;
var score = 0;

function makeBubbble() {
  var clutter = "";
  for (var i = 1; i <= 102; i++) {
    var random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${random}</div> `;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
}

function runTime() {
  var time = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timervalue").textContent = timer;
    } else {
      clearInterval(time);
      document.querySelector("#pbottom").innerHTML = `<h1>Game over</h1>`;
    }
  }, 1000);
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitvalue").textContent = hitrn;
}

function incrementScore() {
  score += 10;
  document.querySelector("#scorevalue").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", function (dets) {
  var clickNumber = Number(dets.target.textContent);
  if (clickNumber === hitrn) {
    incrementScore();
    makeBubbble();
    getNewHit();
  }
});
makeBubbble();
runTime();
getNewHit();
