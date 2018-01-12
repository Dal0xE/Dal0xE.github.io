function gFactors(nm) {
    factors = [];
    for (var x = 1; x <= nm; x++) {
        if (nm % x === 0) {
            factors.push(x);
        }
    }
    return(factors);
}
