function capitalizeLetters(str) {
    const result = str.replace(str[0], str[0].toUpperCase());
    return result;
};

function capitalizeSentence(str) {
    const givenArray = str.split(' ');
    let resultArray = [];
    for (let i = 0; i < givenArray.length; i++) {
        resultArray.push(capitalizeLetters(givenArray[i]));
    };
    const result = resultArray.join('b');
    return result;
};

console.log(`${capitalizeSentence(process.argv[2])}`);