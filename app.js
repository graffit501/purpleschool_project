/*
Написать функцию, которая возвращает true,
если элемент есть, и false, если нет.
*/

const arr = [2, 4, 4, 10, 20];


const result = (element)=>{
    return arr.find((el)=>el==element)?true:false;}
console.log(result(12))