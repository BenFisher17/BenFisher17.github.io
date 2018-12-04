var el1 = document.querySelector("h1.first");
el1.innerHTML = "<b><i>This is bold italicized text.</i></b>";
//
var el2 = document.getElementsByTagName ("li");
var ulel = el2[0];
ulel.parentNode.setAttribute("class", "first");


var el3 = document.createElement("li");
var text = document.createTextNode("Blah");
el3.appendChild(text);
var parent = el2[0].parentNode;
parent.appendChild(el3);
