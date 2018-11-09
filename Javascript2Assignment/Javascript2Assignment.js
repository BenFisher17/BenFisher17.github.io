

var output = fcalc(calcRandomNumber(),calcRandomNumber());


var item1 = document.getElementById("first");
item1.textContent = output[0] + (" the product");
var item2 = document.getElementById("second");
item2.textContent = output[1] + (" the sum");
var item3 = document.getElementById("third");
item3.textContent = output[2] + (" the difference");
var item4 = document.getElementById("fourth");
item4.textContent = output[3] + (" the quotient");

//////////

function fcalc( x, y) {
    var product = (x * y);
    var sum = x + y;
    var difference = x - y;
    var quotient = x / y;
    var answers = [product, sum, difference, quotient];
    return answers;

  };

  fcalc();



//
function calcRandomNumber () {
	var randNum = Math.round(Math.random() * 100);
	return randNum;
}

var theRandomNumber = randomNumber(10);
//
