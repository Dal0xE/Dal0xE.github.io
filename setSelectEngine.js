function setSelectEngine(parsedIndex) {
    this.index = parsedIndex;
    this.displayList = document.getElementById("displayList");
    this.endpoints = [window.location];
    console.log("Set engine successfully created");
}
setSelectEngine.prototype.render = function() {
    console.log("Set successfully called to render");
    if (this.index.sets.size === 0 && !hashFetchSuccess) {
        showModal("empty-index");
        return;
    }
    if (this.index.default != undefined) {
        if (parser === undefined) {
            console.log("Hit undefined branch");
            var localFetcher = new XMLHttpRequest();
            localFetcher.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    parser = new ContextParser(JSON.parse(this.responseText));
                    parser.setObjects(0);
                    closeModal("setselect");
                }
            }
            localFetcher.open("GET", this.index.sets[this.index.default][2], false);
            localFetcher.send();
        }
        else parser.fetchAndRender(this.index.sets[this.index.default][2]);
    }
    this.index.sets.forEach(function(x) {
        const a = document.createElement("div");
        const b = document.createTextNode(x[1]);
        a.appendChild(b);
        a.className = "clickableSet";
        a.id = x[2]
        a.addEventListener('click', function() {
            const localId = this.id;
            if (parser === undefined) {
                console.log("Hit undefined branch");
                var localFetcher = new XMLHttpRequest();
                localFetcher.onreadystatechange = function() {
                    if (this.readyState === 4 && this.status === 200) {
                        parser = new ContextParser(JSON.parse(this.responseText));
                        parser.setObjects(0);
                        closeModal("setselect");
                    }
                }
                localFetcher.open("GET", localId, false);
                localFetcher.send();
                return;
            }
            parser.fetchAndRender(this.id);
        });
        document.getElementById("setSelectList").appendChild(a);
    });
}