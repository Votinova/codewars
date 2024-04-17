
/*

You probably know, that in Javascript (and also Ruby) there is no concept of interfaces. There is only a concept of inheritance, but you can't assume that a certain method or property exists, just because it exists in the parent prototype / class. We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" interface. We need to implement a method which checks for this interface.
Rules

The SantaClausable interface is implemented, if all of the following methods are defined on an object:

    sayHoHoHo() / say_ho_ho_ho
    distributeGifts() / distribute_gifts
    goDownTheChimney() / go_down_the_chimney

Example

var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};

isSantaClausable(santa); // must return TRUE
isSantaClausable(notSanta); // must return FALSE
Вы, наверное, знаете, что в Javascript (а также Ruby) нет понятия интерфейсов. Есть только концепция наследования, но нельзя предполагать, что некий метод или свойство существует только потому, что оно существует в родительском прототипе/классе. Мы хотим выяснить, соответствует ли данный объект требованиям для реализации интерфейса SantaClausable . Нам нужно реализовать метод, который проверяет этот интерфейс .
Правила

Интерфейс SantaClausable реализуется, если для объекта определены все следующие методы:

    sayHoHoHo() / say_ho_ho_ho
    distributeGifts() / distribute_gifts
    goDownTheChimney() / go_down_the_chimney

Пример

var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};

isSantaClausable(santa); // must return TRUE
isSantaClausable(notSanta); // must return FALSE

*/
function isSantaClausable(obj) {
   return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function(methodName) {
    return typeof obj[methodName] == 'function';
  });
}
