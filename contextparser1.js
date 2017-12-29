function ContextParser() {
  var set_t = location.hash;
  var setname = "";
  for (var x = 1; x < set_t.length; x++) {
    setname += set_t[x];
  }
  this.set = undefined;
  this.fetcher = new XMLHttpRequest();
  this.fetcher.onReadyStateChange = this.postproc;
  this.fetcher.open("GET", "https://dal0xe.github.io/sets/" + setname, false);
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
  cspace = Math.ceil(Math.random * 3);
  this.spacelist[cspace].text = cset[num][1];
  this.spacelist[cspace].onclick = "showCorrect()";
  var used = [cspace];
  for (var x = 0; x < 3; x++) {
    attempt_t = Math.ceil(Math.random * 3);
    while (!(attempt_t in used)) {
      attempt_t = Math.ceil(Math.random * 3);
    }
    self.spacelist[attempt_t].text = cset[x + 2];
    self.spacelist[attempt_t].onclick = "showIncorrect()";
  }
}
ContextParser.prototype.postproc = function() {
  if (this.fetcher.readyState === 4) {
    this.set = JSON.parse(this.fetcher.responseText);
  }
}
