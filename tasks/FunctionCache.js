
/*
If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

Usage example:

var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments

Если вы выполняете сложные вычисления или выполняете трудоемкие вызовы API, иногда вам нужно кэшировать результаты. В этом случае мы хотим, чтобы вы создали оболочку функции, которая принимает функцию и кэширует ее результаты в зависимости от аргументов, которые были применены к функции.

Пример использования:

var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments




*/
function cache(func) {
  var funcCache = {};
    return function () {
        var key = JSON.stringify(arguments);

        if (funcCache.hasOwnProperty(key))
            return funcCache[key];

        funcCache[key] = func.apply(this, arguments);
        return funcCache[key];
    };
}
