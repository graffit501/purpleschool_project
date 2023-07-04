/* Реализовать методы увеличения и уменьшения баланса,
при котором каждая операция сохраняется в массив
operations в виде { reason: 'Оплата налогов', sum: -100 }.
Возвращается true, если успешно и false, если не зватает баланса.
Также реализовать метод вывода числа операций по кошельку
*/


const wallet = {
    balance: 0,
    operations: [],
    add:function(reason,sum){
        this.operations.push({reason: reason,
                sum:sum
        });
        this.balance +=sum;
        return true;
    },
    cost: function(reason,sum){
        if(this.balance - sum < 0) 
        {
            alert(`Отрицательный баланс дальнешие операции невозможны`)
            return `Отрицательный баланс дальнешие операции невозможны`}
          
            this.balance -=sum;
        this.operations.push({reason: reason,
            sum:sum*-1
            
    });
        return true;
    },
    operationCount:()=> `общее количество операций ${this.operations.length}`    
    };

    

let user1 = wallet
console.log(user1.add('зарплата',20000));
console.log(user1.cost('product',1000));
console.log(user1.add('премия',1500));
console.log(user1.cost('покупка', 34522))

console.log(user1.balance)
console.log(user1.operations)