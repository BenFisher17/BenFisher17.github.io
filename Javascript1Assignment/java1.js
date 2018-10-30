
function function1 (tArray){
var randIndex = Math.round(Math.random() * (tArray.length - 1));

return tArray[randIndex];
}


var tArray = new Array (1, 2, 3, 4, 5, 6);


var item1 = document.getElementById("first");
var item2 = document.getElementById("second");
var item3 = document.getElementById("third");
var item4 = document.getElementById("fourth");
item1.textContent = function1(tArray);
item2.textContent = function1(tArray);
item3.textContent = function1(tArray);
item4.textContent = function1(tArray);
