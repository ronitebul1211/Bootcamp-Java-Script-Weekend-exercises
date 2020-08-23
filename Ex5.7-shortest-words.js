/**
 Simple, given a string of words, return the length of the shortest word(s).
 String will never be empty and you do not need to account for different data types.
 */

 const getLengthOfShortestWord = (string) => {
  
  let wordsArray = string.split(' ');


  return wordsArray.reduce((shortestWord, currentWord) => {
    return currentWord.length >= shortestWord.length ? shortestWord : currentWord;
  }).length;


 };
 //TEST
 console.log(getLengthOfShortestWord(`abcde abc aff gd abcffffde`));

