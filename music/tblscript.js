var song
var playlist = ['/weight_in_gold.mp3', '/Clean%20Bandit%20-%20Rockabye%20ft.%20Sean%20Paul%20&%20Anne-Marie%20Official%20Video.mp3', '/Troye%20Sivan%20-%20FOOLS%20(Blue%20Neighbourhood%20Part%2023).mp3', '/attention.mp3'];
var next = 0;
function play(svar) {
    song = new Audio(svar);
      setPlaylist(svar);
     	song.play();
      song.addEventListener("ended", function() {
         song.pause();
         skip();
      });
      }
function pause() {
    song.pause();
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
function cont() {
  song.play();
}
function setPlaylist(willPlay) {
    playlist = exclude(playlist, willPlay);
}
function shuffle() {
    playlist = shuffleArray(playlist);
}
function skip() {
    song.pause();
    song = playlist[next];
    song.play();
    if (next === playlist.length - 1) {
        next = 0;
    } else {
        next += 1;
    }
}
function exclude(li, exc) {
    var fnl = [];
    for (var x; x < li.length; x++) {
        if (li[x] != exc) {
             fnl.push(li[x]);
             return(fnl);
         }
    }
}
function loadPlaylist() {
     for (var x; x < playlist.length; x++) {
         playlist[x] = new Audio(playlist[x]);
     }
     var modb = document.getElementById('skip');
     modb.text = "Skip";
     modb.onclick = skip;
}
