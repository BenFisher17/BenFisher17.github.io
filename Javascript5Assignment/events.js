
var x = document.getElementById("xCoord");
var y = document.getElementById("yCoord");


function getCoordinates(e) {
    x.textContent = "X =: " + e.clientX;
    y.textContent = "Y = " + e.clientY;

  }

function clearCoordinates(e) {
    var clear = e.keyCode;
    if (clear == 67) {
    x.textContent = "X = 0";
    y.textContent = "Y = 0";
  }
}

var mouseChecker = document;
mouseChecker.addEventListener('keydown', clearCoordinates, false);
mouseChecker.addEventListener('mousemove', getCoordinates, false);
