

/*
This is a spin off of my first kata.

You are given a string containing a sequence of character sequences separated by commas.

Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
Examples

"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL

Это ответвление моего первого ката .

Вам дана строка, содержащая последовательность последовательностей символов, разделенных запятыми.

Напишите функцию, которая возвращает новую строку, содержащую ту же последовательность символов, за исключением первой и последней, но на этот раз разделенных пробелами.

Если входная строка пуста или удаление первого и последнего элементов приведет к тому, что результирующая строка станет пустой, верните пустое значение (представленное как общее значение). NULLв примерах ниже).
Примеры

"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL


*/
function array(string) {
  
  let arr = string.split(",");
  if ( arr.length < 3) return null;
  return arr.slice(1, arr.length - 1).join(' ');
  
}
