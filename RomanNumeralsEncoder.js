/* 

Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.


Создайте функцию, принимающую положительное целое число от 1 до 3999 (оба включены) в качестве параметра и возвращающую строку, содержащую представление этого целого числа римскими цифрами.

Современные римские цифры записываются путем выражения каждой цифры отдельно, начиная с самой левой цифры и пропуская любую цифру со значением ноль. Римскими цифрами обозначается 1990 год: 1000=М, 900=СМ, 90=ХС; в результате получается MCMXC. 2008 год записывается как 2000=ММ, 8=VIII; или ММВIII. В 1666 году каждый римский символ используется в порядке убывания: MDCLXVI. 
*/

function solution(number){
  let result = '';
  let romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  numbers.map(function (value, index) {
    while (value <= number) {
      result += romans[index];
      number -= value;
    }
  }
)
  return result;
}
