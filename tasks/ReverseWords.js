/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

Завершите функцию, которая принимает строковый параметр и меняет местами каждое слово в строке. Все пробелы в строке должны быть сохранены.
Примеры

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"


*/


function reverseWords(str) {
  let arrs = str.split(' ');
  for (let i = 0; i < arrs.length; i++) {
      let strArr = arrs[i].split('');
      strArr.reverse()
      arrs[i] = strArr.join('')
    }
  return arrs.join(' ')
}
