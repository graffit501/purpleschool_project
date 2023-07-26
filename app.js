'use strict';

/*
Сделать функцию пользователя которая берет за основу
userInfo и за счет замыкания создает новый объект, с
которым можно работать как user1().increase(100)
*/

const userInfo = {
balance: 0,
operations: 0,
increase(sum) {
    this.balance += sum;
    this.operations++;
    },
};
function createuser(){
    const newUser = {...userInfo}
    return function(){
            return newUser
    }
}
 const user1  = createuser();
 const user2  = createuser();
 user1().increase(150)
 user2().increase(350)
 user1().increase(450)
 console.log(user1())
 console.log(user2())