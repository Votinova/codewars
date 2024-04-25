/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). 

В массиве целых чисел найдите то, которое встречается нечетное количество раз.

Всегда будет только одно целое число, которое появляется нечетное количество раз.
Примеры

[7]должен вернуться 7, потому что это происходит 1 раз (что странно).
[0]должен вернуться 0, потому что это происходит 1 раз (что странно).
[1,1,2]должен вернуться 2, потому что это происходит 1 раз (что странно).
[0,1,0,1,0]должен вернуться 0, потому что оно встречается 3 раза (что странно).
[1,2,2,3,3,3,4,3,3,3,2,2,1]должен вернуться 4, потому что оно появляется 1 раз (что странно).

*/

  
function findOdd(A) {
 let num = {};

  for (let i = 0; i < A.length; i++) {
    if (A[i] in num) {
      num[A[i]] += 1;
  } else {
    num[A[i]] = 1
  }
  }
  console.log(num);
  for (let key in num) {
  if (num[key] % 2 !== 0) return(Number(key))
  }
}
