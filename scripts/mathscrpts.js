distancef = function(a, b) {
    return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}
mid = function(a, b) {
    return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
}
trarea = function(a, b) {
    return a * b / 2;
}
trhyp = function(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
trleg = function(a, b) {
    return Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2));
}
avg = function(a, b) {
    return (a + b) / 2;
}
