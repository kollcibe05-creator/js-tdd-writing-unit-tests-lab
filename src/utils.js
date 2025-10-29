// Your code here

export function isPalindrome (word) {
    for(let i = 0; i<word.length/2; i++) {
        let j = word.length-1-i

        return word[i] === word[j];
    }

}