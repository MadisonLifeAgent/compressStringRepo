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
countCharacters();

// function to help get count of each character in string in order
function countCharacters(){
    // declare variables
    let firstString = "aaabbbbbccccaacccbbbaaabbbaaa";
    let finalString = "";
    let currentCount = 1;


    // loop through string for a count of each letter
    for(let i = 0; i < firstString.length; i++){

        // compare current string to next string to make sure they match
        if(firstString[i] === firstString[i + 1]){
            // increase counter
            currentCount++;
        }

        else {
            // add current count to final string
            finalString += currentCount;
            // add current string to final string
            finalString += firstString[i];

            // reset counter
            currentCount = 1;
        }
    }
    // out put final string to console
    console.log(finalString);
}