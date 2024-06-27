/*
Create a function which compares two probabilities, returning true if the first one is most likely otherwise false.

For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.

So:

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.

Создайте функцию, которая сравнивает две вероятности и возвращает true, если первая из них, скорее всего, ложна.

В этом упражнении вероятность выражается как два числа, разделенные двоеточием, например, вероятность 1 из 3 будет равна 1:3.

Так:

Input: ('1:3','1:2') - returns false as 1 in 3 is less likely than 1 in 2.



*/



function mostLikely(prob1,prob2){
  let arr1 = prob1.split(':');
  let arr2 = prob2.split(':');
  let num1 = arr1[0] / arr1[1];
  let num2 = arr2[0] / arr2[1];
  return num1 > num2
}
