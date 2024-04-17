/* Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.

Note: There will always be at least 1 string; all inputs will be non-empty.

For example:

createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"

Tip (helpful, but not necessary): Try using classes!

Good luck and happy coding!

Реализуйте функцию, которая получает строку и позволяет расширять ее повторными вызовами. Если аргумент не передан, вы должны вернуть строку, состоящую из слов, разделенных пробелами, которые вы получили ранее.

Примечание . Всегда будет как минимум одна строка; все входные данные будут непустыми.

Например:

createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"

Совет (полезный, но не обязательный): попробуйте использовать классы!

Удачи и приятного кодирования!

*/





function createMessage(str) {
 return (str1)=>{
  if (str1===undefined) return str;
  return createMessage(str+' '+str1)
  }
}
