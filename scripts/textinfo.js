function getWordCount(text) {
    a = text.split(' ');
    b = []
    for (var x; x < a.length; x++) {
        if (a[x].length > 0) {
            b.push(a[x]);
        }
        else {
            continue;
        }
    }
}
