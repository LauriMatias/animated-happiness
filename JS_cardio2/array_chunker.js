// Input given ex. 'node array_chunker.js "1 2 3 4 5 6 17" 3' where the input array numbers are the 3rd input inside the "" and 
// the 4th input tells how long the output arrays should be.

function chunkArray(arr, splitter) {
    let newArr = new Array();
    let subArr = new Array();
    const loops = Math.floor(arr.length/splitter);
    for (i = 0; i < loops; i++) {
        subArr = arr.slice(0, splitter);
        newArr.push(subArr);
        arr.splice(0, splitter);
    };
    if (arr.length > 0) {
        newArr.push(arr);
    };
    return newArr;
};


const arr = process.argv[2].split(" ");
const splitter = process.argv[3];
const splitArr = chunkArray(arr, splitter);
console.log(splitArr);