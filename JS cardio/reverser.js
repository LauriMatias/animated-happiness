// Challenge 1: Reverse a string

function reverseString (str) {
    const reverseWord = [];
    for (let i = str.length; i >= 0;) {
        i -= 1;
        reverseWord.push(str[i]);
    };
    return reverseWord.join('');
};

function reverseInt (int) {
    let posInt = int;
    let revString = '';
    if (posInt < 0) {
        posInt = posInt * -1;
    };
    const stringInt = posInt.toString();
    for (let i = 0; i < stringInt.length; i++) {
        revString = stringInt[i] + revString;
    };
    reverseNumber = parseInt(revString);
    return reverseNumber * Math.sign(int);
};

const input = process.argv[2];
if (isNaN(parseInt(input))) {
    input.toLowerCase();
    const reverseInput = reverseString(input);
    console.log(`The word ${input} in reverse is ${reverseInput}.`);

    // Challenge 2: Is the word a palindrome?

    if (input == reverseInput) {
        console.log(`The word ${input} is also a palindrome.`);
    } else {
        console.log(`The word ${input} is not a palindrome.`);
    };
} else {
    const reverseInput = reverseInt(input);
    console.log(`The number ${input} in reverse is ${reverseInput}`);
}; 