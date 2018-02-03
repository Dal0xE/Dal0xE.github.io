function ContextParser(parsed) {
  var setname = location.hash.split("#")[1];
  console.log(setname);
  this.set = parsed;
  this.version = 1.0;
  this.questionspace = document.getElementById("q");
  this.aspace1 = document.getElementById("b1");
  this.aspace2 = document.getElementById("b2");
  this.aspace3 = document.getElementById("b3");
  this.aspace4 = document.getElementById("b4");
  this.spacelist = [this.aspace1, this.aspace2, this.aspace3, this.aspace4];
}
ContextParser.prototype.setObjects = function(num) {
  cset = this.set.set;
  mset = shuffleArray(this.spacelist);
  this.questionspace.text = cset[num][0];
  mset[0].textContent = cset[num][1];
  mset[0].onclick = "showCorrect();";
  for (var x = 0; x <= 3; x++) {
    mset[x].textContent = cset[num][x + 2];
    mset[x].onclick = "showIncorrect();";
  }
}
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
