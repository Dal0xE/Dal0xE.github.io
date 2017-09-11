//REQUIRES: LocalStorageManager
Autopilot = function() {
  this.storage = new LocalStorageManager;
  hasdest = (this.storage.seek("autopilot." + window.location) !== 0);
}
Autopilot.prototype.setDest = function(dest) {
  this.storage.setItem("autopilot." + window.location, dest);
}
Autopilot.prototype.redirect = function() {
  if (this.hasdest) {
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
