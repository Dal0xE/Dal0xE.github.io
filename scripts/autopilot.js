//REQUIRES: StorageManager
autopilot = function() {
  storage = new StorageManager;
  redir = storage.seek("autopilot");
  if (redir === 0) {
    return false;
  } else {
    window.location = redir;
  }
}
