// Heart Animation
const element = document.getElementById("live-tv");

const duration = 3000;
const speed = 1;
const cursorXOffset = 75;
const cursorYOffset = 500;

var hearts = [];

function generateHeart(x, y, xBound, xStart, scale) {
  var heart = document.createElement("DIV");
  heart.setAttribute("class", "heart");
  element.appendChild(heart);
  heart.time = duration;
  heart.x = x;
  heart.y = y;
  heart.bound = xBound;
  heart.direction = xStart;
  heart.style.left = heart.x + "px";
  heart.style.top = heart.y + "px";
  heart.scale = scale;
  heart.style.transform = "scale(" + scale + "," + scale + ")";
  if (hearts == null) hearts = [];
  hearts.push(heart);
  return heart;
}

var down = false;
var event = null;

window.onscroll = function (e) {
  down = true;
  event = e;
};

document.ontouchstart = function (e) {
  down = true;
  event = e.touches[0];
};

var before = Date.now();
var id;
var gr;

function frame() {
  var current = Date.now();
  var deltaTime = current - before;
  before = current;
  for (i in hearts) {
    var heart = hearts[i];
    heart.time -= deltaTime;
    if (heart.time > 0) {
      heart.y -= 1.5;
      heart.style.top = heart.y + "px";
      heart.style.left =
        heart.x + ((heart.direction * heart.bound) / heart.y) * 150 + "px";
    } else {
      heart.parentNode.removeChild(heart);
      hearts.splice(i, 1);
    }
  }
}

function check() {
  if (down) {
    var start = 1 - Math.round(Math.random()) * 2;
    var scale = Math.random() * Math.random() * 0.8 + 0.4;
    var bound = 25 + Math.random() * 20;
    generateHeart(cursorXOffset, cursorYOffset, bound, start, scale);
  }
}

document.querySelector("#tv-image").addEventListener("mouseover", function () {
  gr = setInterval(check, 150);
  id = setInterval(frame, 12);
});

document.querySelector("#tv-image").addEventListener("mouseleave", function () {
  clearInterval(gr);
  clearInterval(id);
});
