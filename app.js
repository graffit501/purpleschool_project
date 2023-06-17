/*
Найти среднее значение последоватедьности
чисел с помощью reduce
*/

const arr = [1, 4, 4, 10];


// вариант через длину массива 
const result =  arr.reduce((acc,value)=>acc+value)/arr.length;
console.log(result);


 const result2 = arr.reduce((acc, value,i,arrayValue)=>{
        console.log(`index ${i} array length ${arrayValue.length} acc ${acc}`)
            let sum = acc+value
            acc+value
           if(i+1 == arrayValue.length) {
            return sum/arrayValue.length
           }else{
            return  sum
           }


 },0)
 console.log(`result2 ${result2}`)
