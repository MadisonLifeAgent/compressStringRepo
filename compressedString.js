"use strict";

// 3.	Compress a string of characters
    // a.	For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"

    // set variable
    // function to count each character
        // loop
        // compare characters
        // if letters not the same anymore add to new string variable
    // function to put count with character
    // function to put all back together into one string

// initialize string
let theString = "aaabbbbbccccaacccbbbaaabbbaaa";

countCharacters(theString);

// function to help get count of each character in string in order
function countCharacters(theString){
    let currentCount = 1;

    // loop through string for a count of each letter
    for(let i = 0; i < theString.length; i++){

        // compare current string to next string to make sure they match
        if(theString.charAt(i) === theString.charAt(i + 1)){
            currentCount++;
        }
        // add current count and string character to new string in a new function
        // (theString.charAt(i) !== theString.charAt(i + 1))
        else {
            newStringWithCompression(theString.charAt(i), currentCount);
            currentCount = 1;
        }
    }
    console.log(currentCount);
}

// function to concatenate count and string character together
function newStringWithCompression(currentChar, currentCount){
    let compressedString = currentChar + currentCount;

    console.log(compressedString);
}

// debug line
console.log(theString);