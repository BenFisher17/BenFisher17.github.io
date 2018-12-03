function getRandom() {
  return (Math.floor(Math.random() * 20) + 70);
}

function makeObject(home, visitor, homescore, visitorscore) {
  this.home = home;
  this.visitor = visitor;
  this.homeScore = homescore;
  this.visitorScore = visitorscore;
  this.getSummary = function () {
    return [this.home, this.homeScore, this.visitor, this.visitorScore];
  };
  this.homewin = function () {
    return (this.homeScore > this.visitorScore);
  }
}

var objTest = new makeObject("test 1", "test 2", getRandom(), getRandom());
document.getElementById("first").textContent = objTest.getSummary();

var sss1 = new makeObject("Text Books", " Notebooks", getRandom(), getRandom());
var sss2 = new makeObject("Pens", " Pencils", getRandom(), getRandom());
var sss3 = new makeObject("Binders", " Folders", getRandom(), getRandom());
var sss4 = new makeObject("Erasers", " Whiteout", getRandom(), getRandom());
var sss5 = new makeObject("Highlighters", " Sharpies", getRandom(), getRandom());
var sss6 = new makeObject("Waterbottles", " Desks", getRandom(), getRandom());

var array = new Array(sss1, sss2, sss3, sss4, sss5, sss6);

document.getElementById("first").textContent = array[0].getSummary();
document.getElementById("second").textContent = array[1].getSummary();
document.getElementById("third").textContent = array[2].getSummary();
document.getElementById("fourth").textContent = array[3].getSummary();
document.getElementById("fifth").textContent = array[4].getSummary();
document.getElementById("sixth").textContent = array[5].getSummary();
