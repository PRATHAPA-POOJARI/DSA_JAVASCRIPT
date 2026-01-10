// Check if a String is Palindrome


// What is a Palindrome?

// A palindrome is a word, number, or phrase that reads the same forward and backward.

// Forward → same as backward

// note : Trim Method

// trim() removes both leading and trailing spaces from a string


function  isPalidrome(str) {
    str=str.trim()
    const reverse =  str.split('').reverse().join('');
    if(str ===reverse){
        return true;
    }
    else  {
        return false;
    }

}


console.log(isPalidrome(" racecar"))


// note other 2 methods are there 

