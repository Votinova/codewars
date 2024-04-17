/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Цифровой корень — это рекурсивная сумма всех цифр числа.

Данный n, возьмем сумму цифр n. Если это значение имеет более одной цифры, продолжайте уменьшать таким образом, пока не получите однозначное число. Входные данные будут неотрицательным целым числом. 
*/

function digitalRoot(n) {
   while (n >= 10) {
        n = Array.from(String(n), Number).reduce((a, b) => a + b, 0);
        digitalRoot(n);
    }
    return n;
}
