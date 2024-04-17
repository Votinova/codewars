
/*
We want to create a function that will add numbers together when called in succession.

add(1)(2); // == 3

We also want to be able to continue to add numbers to our chain.

add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15

and so on.

A single call should be equal to the number passed in.

add(1); // == 1

We should be able to store the returned values and reuse them.

var addTwo = add(2);
addTwo; // == 2
addTwo + 5; // == 7
addTwo(3); // == 5
addTwo(3)(5); // == 10

Мы хотим создать функцию, которая будет складывать числа при последовательном вызове.

add(1)(2); // == 3

Мы также хотим иметь возможность продолжать добавлять номера в нашу цепочку.

add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15

и так далее.

Одиночный вызов должен быть равен переданному номеру.

add(1); // == 1

Мы должны иметь возможность сохранять возвращаемые значения и повторно использовать их.

var addTwo = add(2);
addTwo; // == 2
addTwo + 5; // == 7
addTwo(3); // == 5
addTwo(3)(5); // == 10

Мы можем предположить, что любое передаваемое число будет действительным целым числом.

*/

function add(n){
  var fn = function(x) {
    return add(n + x);
  };
  
  fn.valueOf = function() {
    return n;
  };
  
  return fn;
}
