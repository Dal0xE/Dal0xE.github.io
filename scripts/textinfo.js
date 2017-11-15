function getWordCount(text) {
    var a = text.split(' ');
    var b = [];
    for (var x; x < a.length; x++) {
        if (a[x].length > 0) {
            b.push(a[x]);
        }
        else {
            continue;
        }
    }
    return (b.length);
}
function getAverageWordLength(text) {
    text = text.split('.').join().split(',').join().split('?').join().split('!').join();
    text = text.split("'").join().split('/').join(' ').split('(').join().split(')').join();
    var a = text.split(' ');
    var b = [];
    for (var x; x < a.length; x++) {
        if (a[x].length > 0) {
            b.push(a[x]);
        }
        else {
            continue;
        }
    }
    var res = 0;
    for (var x; x < b.length; x++) {
        res += b[x].length;
    }
    return (res / b.length);
}
function getNumberOfSentences(text) {
    var a = text.split('.');
    var b = [];
    for (var x; x < a.length; x++) {
        if (a[x].length > 0) {
            b.push(a[x]);
        }
    }
    return (b.length);
}
