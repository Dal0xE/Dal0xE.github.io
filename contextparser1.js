function ContextParser() {
  var setname = location.hash.split("#")[1];
  console.log(setname);
  this.fetcher = new XMLHttpRequest();
  this.fetcher.onreadystatechange = this.postproc;
  this.fetcher.open("GET", "/sets/" + setname, false);
  this.fetcher.send();
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
  this.questionspace.text = cset[num][0];
  cspace = Math.ceil(Math.random() * 3);
  this.spacelist[cspace].textContent = cset[num][1];
  this.spacelist[cspace].onclick = "showCorrect()";
  var used = [cspace];
  for (var x = 0; x < 3; x++) {
    do {
      attempt_t = Math.ceil(Math.random() * 3);
    } while (attempt_t in used);
    this.spacelist[attempt_t].textContent = cset[x + 2];
    this.spacelist[attempt_t].onclick = "showIncorrect()";
    used.push(attempt_t);
  }
}
ContextParser.prototype.postproc = function() {
  if (this.readyState === 4) {
    if (this.status != 200) { //Something went wrong
      location.replace("/seterror");
      return;
    }
    this.parent.set = JSON.parse(this.responseText);
  }
}
