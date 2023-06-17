/*
Имеется массив изменения цен prices, где внутри
1й элемент массива является ценой в момент Х,
2й - ценой в момент Y.
Нужно преобразовать данные в массив, где будут отображены
только положительные изменения цен: [100, 150]
*/


const price = [[100,200],[120,100],[200,350]];

const resultprice =price
    .map((element)=>{
        return element[1] - element[0]
    })
    .filter((element)=>{
        return element > 0
    })

console.log(resultprice)