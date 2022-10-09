function sumAllPrimes (ceiling) {
    let sum = 0;
    if (ceiling < 2) {return 0};
    for (i = 2; i <= ceiling; i++) {
        if (i > 2 && i % 2 == 0) {
            continue;
        } else if (i > 3 && i % 3 == 0) {
            continue;
        };
        sum += i;
    };
    return sum;
};

const upTo = process.argv[2];
console.log(sumAllPrimes(upTo));