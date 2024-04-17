/*
Task

Define the following classes.
I. Cuboid

The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.
II. Cube

class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

Hint: Make a call to super, passing in the correct arguments, to make life easier ;)

Задача

Определите следующие классы.
I. Кубовидная

Объект constructorдля class Cuboidдолжен получить ровно три аргумента в следующем порядке: length, width, heightи сохраните эти три значения в this.length, this.widthи this.heightсоответственно.

The class Cuboidтогда должен быть геттер surfaceAreaкоторый возвращает площадь поверхности кубоида и геттера volumeкоторый возвращает объем кубоида.
II. Куб

class Cubeявляется подклассом class Cuboid. constructorфункция Cubeдолжен получать только один аргумент, его lengthи используйте это значение, чтобы установить this.length, this.widthи this.height.

Подсказка: позвоните super, передавая правильные аргументы, чтобы облегчить жизнь ;) 
*/

class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  get volume() {
    return this.length * this.width * this.height;
  }
  get surfaceArea() {
    return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
  }
}
