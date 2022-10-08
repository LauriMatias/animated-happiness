function longestWord(sen) {
    let mapOfWords = mapper(sen.split(' '));
    const iterator = mapOfWords.entries();
    let longestWords = ["placeholder"];
    let compare = 0;
    for (i = 0; i < mapOfWords.size; i++) {
        let word = iterator.next().value;
        if (word[1] > compare) {
            compare = word[1];
            longestWords[0] = word[0];
            longestWords.splice(1, longestWords.length-1);
        } else if (word[1] == compare) {
            longestWords.push(word[0]);
        } else {continue};
     }
    return longestWords;
};

function mapper(arr) {
    let mapOfWords = new Map();
    for (i = 0; i < arr.length; i++) {
        if (mapOfWords.has(arr[i])) {
            continue;
        } else {
            mapOfWords.set(arr[i], arr[i].length);
        };
    };
    return mapOfWords;
};

function printer(arr) {
    if (arr.length == 1) {
        console.log(`The longest word in that sentence was "${arr[0]}".`);
    } else if (arr.length > 1) {
        console.log(`The longest words in that sentence were "${arr}".`);
    };
};

const sentence = process.argv[2].toLowerCase();
const mostFrequent = longestWord(sentence);
printer(mostFrequent);