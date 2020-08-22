`use-strict`

/**
  Complete the function so that it converts dash/underscore delimited words into camel casing. 
  The first word within the output should be capitalized only if the original word was capitalized 
  (known as Upper Camel Case, also often referred to as Pascal case).
  Examples
  toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
  toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
 */


 const toCamelCase = (string) => {
  const rgxDashOrUnderscore = /(-|_)/g;
  const rgxMatch = /(?<=(-|_))[a-z]/g; // lower case letter after dash / underscore
  return string.replace(rgxMatch, (match) => match.toUpperCase()).replace(rgxDashOrUnderscore, '');
 }
 //TEST
 console.log(toCamelCase('The_Stealth_warrior'));