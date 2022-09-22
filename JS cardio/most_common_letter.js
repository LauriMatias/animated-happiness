// This program calculates what is the most frequently used character in a given sentence. The sentence should be given during calling of the program as the third argument
// (as in 'node most_common_letter.js "<sentence>"'). If the program runs correctly, it should reply by logging "The most common letter in that sentence was <letter>, 
// it occurred <number> times".


// This function counts how many times a letter is used in a string. It's given the string and the letter to look for as arguments and it returns a number.
// The calculation is done with .match() method which returns an array of all the occurrences and the function uses the length of this array and adds 1.
// Bit crude, I admit, but it works :)
function timesUsed(str, letter) {
    const found = str.match(letter); // Node match() tekee jotain muuta???
    const timesFound = found.length + 1;
    console.log(found); //debug
    return timesFound;
};

// The function isMostFrequent finds out which entry in a map has the largest value to it. The map is given to it as an argument and it returns an array with the most frequent
// character as the first value and the number of times it came up as the second. 
function isMostFrequent(map1) {
    let mostInstances = ["", 0];
    for (let x of map1.entries()) {
        if (mostInstances[1] > x[1]) {
            break;
        } else {mostInstances = x;};
    };
    return mostInstances;
};

// maxCharacter function constructs the map used in the isMostFrequent function by calling the timesUsed function to find out how many times a particular character was used in the
// given sentence. All the characters of the sentence are processed with a for loop but an if statement is used to avoid repetition of the same data in the map. The map has the
// character as the key and value is how many times it was found. The sentence is given to the function as an argument and it returns the same array as function isMostFrequent.
function maxCharacter(str) {
    let mapOfCharacters = new Map();
    for (i = 0; i < str.length; i++) {
        if (mapOfCharacters.has(str[i])) {
            continue;
        } else {
            const number = timesUsed(str, str[i]);
            mapOfCharacters.set(str[i], number);
        };
    };
    for (let y of mapOfCharacters.entries()) {
        console.log(y);
    };
    return isMostFrequent(mapOfCharacters);
};

// This is the main part of the program. The sentence is read with the process.argv[] statement as a string, and the string gets modified to lower case lettering. The sentence is
// then used when calling function maxCharacter and the result is used in the console log.
const sentence = process.argv[2].toLowerCase();
const mostFrequent = maxCharacter(sentence);
// console.log(`The most common letter in that sentence was ${mostFrequent[0]}, it occurred ${mostFrequent[1]} times.`);