/*
концепция замыкания
 */

function power(pow){
    return function(num){
        return num ** pow
    }
}
const powerOfTwo = power(2)// присваиваем перемной функцию 
console.log(powerOfTwo(10));// так как функция возвращает функцию при обращение к ней мы получаем необходимое нам значение