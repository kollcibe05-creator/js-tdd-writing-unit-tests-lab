// Your tests here
import {isPalindrome} from "../utils";

test("return true if a word is a palindrome and false if not", ()=> {
    
   const palindrome = "racecar" 
   const notPalindrome = "word"

   const palindromeAnswer = isPalindrome("racecar")
   const palindromeNotAnswer = isPalindrome("word")

   expect(palindromeAnswer).toBeTruthy();
   expect(palindromeNotAnswer).toBeFalsy();
})


