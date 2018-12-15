/*
Good news! This version of ContextParser is backwards-compatible through version 1.
*/

function ContextParser(parsed) {
    var setname = location.hash.split("#")[1];
    this.set = parsed;
    this.version = 1.2;
    this.length = this.set.set.length;
    this.questionspace = document.getElementById("q");
    this.aspace1 = document.getElementById("b1");
    this.aspace2 = document.getElementById("b2");
    this.aspace3 = document.getElementById("b3");
    this.aspace4 = document.getElementById("b4");
    this.spacelist = [this.aspace1, this.aspace2, this.aspace3, this.aspace4];
}
ContextParser.prototype.setObjects = function(num) {
    if (num == this.length) {
      top.showResults();
    }
    cset = this.set.set;
    mset = shuffleArray(this.spacelist);
    var offset;
    var correctQ;
    if (typeof cset[num][0] == "number") {
        offset = 2;
        correctQ = cset[num][0];
    }
    else {
        offset = 1;
        correctQ = 1;
    }
    this.questionspace.text = cset[num][offset - 1];
    for (var x = 0; x < correctQ; x++) {
        mset[x].textContent = cset[num][x + offset];
        mset[x].onclick = top.showCorrect;
    }
    for (; x < 4; x++) {
        mset[x].textContent = cset[num][x + offset];
        mset[x].onclick = top.showIncorrect;
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
ContextParser.prototype.fetchAndRender = function(url) {
    var fetcher = new XMLHttpRequest();
    fetcher.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                parsedSet = JSON.parse(this.responseText);
            }
            else showModal("set-fetch-fail");
        }
    }
    fetcher.open("GET", url, false);
    fetcher.send();
    this.set = parsedSet;
    this.setObjects(0);
    nquestion = 0;
    closeModal("setselect");
    this.length = this.set.set.length;
}