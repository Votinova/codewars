
/*

Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

Это ката предназначено для проверки вашей способности расширять функциональность встроенных классов. В этом случае мы хотим, чтобы вы расширили встроенный Arrayкласс со следующими методами: square(), cube(), average(), sum(), even()и odd().

Объяснение:

    square()должен вернуть копию массива, содержащую все значения в квадрате
    cube()должен вернуть копию массива, содержащую все значения, возведенные в куб
    average()должен возвращать среднее значение всех значений массива; в пустом массиве должен вернуться NaN (примечание: пустой массив не тестируется в Ruby!)
    sum()должен возвращать сумму всех значений массива
    even()должен возвращать массив всех четных чисел
    odd()должен возвращать массив всех нечетных чисел

Примечание: исходный массив нельзя ! менять ни в коем случае
Пример

var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]

*/



Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
Array.prototype.average = function () { return this.sum() / this.length; }
Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }
