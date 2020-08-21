`use-strict`

/**
  Write a function called repeat_str which repeats the given string src exactly count times.
  repeatStr(6, "I") // "IIIIII"
  repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
 */

 const repeat_str = (repetitionsCount, string) => {
   let newString = '';
   for(let i = 1; i <= repetitionsCount; i++){
    newString += string;
   }
   return newString;
 }
 //TEST
 console.log(repeat_str(5, `roni`));