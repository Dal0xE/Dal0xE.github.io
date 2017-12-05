//Requires LocalStorageManager
//Requires LocalSet

var currentSet = new localSet();

function actuate(qno) {
  var q = currentSet.fetch(qno);
  var type = q.type
  if (type) {
    

var allHashData = location.hash.split("#").join();
var currentMode = allHashData.split("/")[0];
var currentMode = JSON.parse(currentMode);
if (currentMode) {
  
