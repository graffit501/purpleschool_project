/*
Есть выгрузка операций пользователя
const operations = [1000, -700, 300, -500, 10000];
а так же начальный баланс в 100$
Необходимо сделать функции расчета:
- Итогового баланса
- Наличия отрицательного баланса (если после очередной операции баланс < 0,
     то выдавать false)
- Расчета среднего расхода и среднего дохода
*/
let balance =  100;
const operations = [1000, -700, 300, -500, 10000];

function totalBalance(balance,operArr){
    for(const item of operArr){
        balance+=item;
    }
    return balance;
}
console.log(totalBalance(balance,operations));

function checkBalance(balance,operations){
    let i =0;
    let result = true;
    for(const item of operations){
        balance+=item;
        if(balance<0){
            //console.log(` У вас отрицательный баланс дальнешие операции не возможны`);
            result =  false;
            break;
        }
    }
   console.log(result?'у вас положительный баланс вы можете продолжить покупки':' У вас отрицательный баланс дальнешие операции не возможны')
   return result;
}
checkBalance(balance,operations);
 

function averageValueBalance(balance, operations){
    let i = 0;
    let j = 0;
    let receipt = 0;
    let cost = 0;
    for(const item of operations){
        if(item>0){
            i++;
            receipt+=item;
        }
        else{
            j++;
            cost+=item*-1;
        }
    }
    console.log( `среднее поступление на счет составили ${receipt/i}`);
    console.log(`средний расход составил ${cost/j}`);
}
averageValueBalance(balance,operations);