function ContextParser() {
  var set_t = location.hash;
  var setname = "";
  for (var x = 1; x < set_t.length; x++) {
    setname += set_t[x];
  }
  this.set = undefined;
  this.fetcher = new XMLHttpRequest();
  this.fetcher.onReadyStateChange = this.postproc;
  this.fetcher.open("GET", "file:////Users/dcrenshaw/Documents/studyset.js", false);
  this.fetcher.send();
  self.version = 1.0;
  self.questionspace = document.getElementById("q");
  self.aspace1 = document.getElementById("b1");
  self.aspace2 = document.getElementById("b2");
  self.aspace3 = document.getElementById("b3");
  self.aspace4 = document.getElementById("b4");
  self.spacelist = [self.aspace1, self.aspace2, self.aspace3, self.aspace4];
}
ContextParser.prototype.setObjects = function(num) {
  cset = self.set.set;
  self.questionspace.text = cset[num][0];
  cspace = Math.ceil(Math.random * 3);
  self.spacelist[cspace].text = cset[num][1];
  self.spacelist[cspace].onclick = "showCorrect()";
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
