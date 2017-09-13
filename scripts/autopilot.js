//REQUIRES: LocalStorageManager
Autopilot = function() {
  this.storage = new LocalStorageManager;
  hasdest = (this.storage.seek("autopilot." + window.location) !== 0);
  noRedirect = (this.storage.seek("noAutopilot") !== 0 && JSON.parse(this.storage.seek("noAutopilot")) !== false);
}
Autopilot.prototype.setDest = function(dest) {
  this.storage.setItem("autopilot." + window.location, dest);
}
Autopilot.prototype.redirect = function() {
  if (this.hasdest && !noRedirect) {
    window.location = this.storage.getItem("autopilot." + window.location);
  }
  else {
    throw 1;
  }
}
Autopilot.prototype.getDest = function() {
  if (this.hasdest) {
    return this.storage.getItem("autopilot." + window.location);
  }
  else {
    throw 1;
  }
}
Autopilot.prototype.redirectUniversal = function() {
  destinations = this.storage.seek("visited");
  if (destinations === 0) {
    throw 1;
  } else {
    rlist = JSON.parse(this.storage.getItem("visited"));
    clarge = undefined;
    for (var x; x < visited.length; x++) {
      if (visited[x] > visited[clarge]) {
        clarge = visited[x];
      } else {
        continue;
      }
    }
    window.location = clarge;
  }
}
    
  
