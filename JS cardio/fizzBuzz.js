function fizzBuzz(maxNumber) {
    for (let i = 1; i <= maxNumber; i++) {
        if (is3(i) && is5(i)) {
            console.log("FizzBuzz");
            continue;
        } else if (is3(i)) {
            console.log("Fizz");
            continue;
        } else if (is5(i)) {
            console.log("Buzz");
            continue;
        } else {console.log(i)};
    };
}

function is3(number) {
    if (number % 3 == 0) {
        return true;
    } else {
        return false;
    };
};

function is5(number) {
    if (number % 5 == 0) {
        return true;
    } else {
        return false;
    };
};

fizzBuzz(100);