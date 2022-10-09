function addAll() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    };
    return result;
};

console.log(addAll(2,5,6,7,11,29));