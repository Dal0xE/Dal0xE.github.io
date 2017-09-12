//REQUIRES: LocalStorageManager
storage = new LocalStorageManager();
slist = storage.seek("visited");
if (slist === 0) {
  var a = {window.location: 1};
  storage.setItem("visited", JSON.stringify(a));
} else {
  var a = storage.getItem("visited");
  var b = JSON.parse(a);
  try {
    b[window.location] += 1;
  }
  catch (exception) {
    b[window.location] = 1;
  }
}
