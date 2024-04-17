/* 
Can Santa save Christmas?

Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

But he has only 24 hours left. Can he do it?
Your Task:

You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents 
the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .


Сможет ли Санта спасти Рождество?

О, нет! Маленькие эльфы Санты в этом году заболели. Ему приходится раздавать подарки самостоятельно.

Но у него осталось всего 24 часа. Сможет ли он это сделать?
Твое задание:

В качестве входных данных вы получите массив с продолжительностью времени в виде строки в следующем формате: HH:MM:SS. Каждая длительность представляет собой время, затраченное Сантой на доставку подарка.
Определите, сможет ли он сделать это за 24 часа или нет. Если время, необходимое для доставки всех подарков, составляет ровно 24 часа, Санта может завершить доставку ;-) . 
*/


function determineTime (durations) {
    var total_sec = durations.reduce(function(total, elem) {
        var time = elem.split(':').map(Number);
        return total + (time[0] * 3600 + time[1] * 60 + time[2]);
    }, 0);
    return total_sec <= 86400;
}
