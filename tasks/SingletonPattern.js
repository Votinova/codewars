
/*
In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

Create an Singleton pattern, so there is one object in system.

Example:

var obj1 = new Singleton();
var obj2 = new Singleton();
obj1 === obj2; // => true
obj1.test = 1;
obj2.test; // => 1

В разработке программного обеспечения шаблон синглтон — это шаблон проектирования, который ограничивает создание экземпляра класса одним объектом. Это полезно, когда для координации действий в системе требуется ровно один объект.

Создайте шаблон Singleton, чтобы в системе был один объект.

Пример:

var obj1 = new Singleton();
var obj2 = new Singleton();
obj1 === obj2; // => true
obj1.test = 1;
obj2.test; // => 1



*/
var Singleton = function(){
   if(Singleton._instance) {
    return Singleton._instance;
  }
  
  Singleton._instance = this;
};
