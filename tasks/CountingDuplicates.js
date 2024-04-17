

/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

Подсчитайте количество дубликатов

Напишите функцию, которая будет возвращать количество не зависящих от регистра различных буквенных символов и числовых цифр, , которые встречаются более чем один раз во входной строке. Можно предположить, что входная строка содержит только буквы алфавита (как прописные, так и строчные) и числовые цифры.
Пример

«абкде» -> 0 # no characters repeats more than once
«ааббкде» -> 2 # 'a' and 'b'
«аабБкде» -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
«неделимость» -> 1 # 'i' occurs six times
«Неделимости» -> 2 # 'i' occurs seven times and 's' occurs twice
«аА11» -> 2 # 'a' and '1'
«АББА» -> 2 # 'A' and 'B' each occur twice


*/
function duplicateCount(text){
var result=0;
  var a=text.toLowerCase();
  while(a.length>0){
    var reg=a.substring(0,1);
    
    a=a.substring(1);
    if(a.indexOf(reg)!=-1){
      a=a.replace(new RegExp(reg,'g'),"");
      result+=1;
    
    }
  }
  return result; 
}
