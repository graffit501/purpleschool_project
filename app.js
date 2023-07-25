'use strict';
/*
Создайте объект пользователя с паролем.
С помощью функции ниже удалить пароль сделав
функцию сброса пароля
*/

function removePassword(reset) {
if (reset) {
this.password = undefined;
} else {
this.password = '1';
}
}'use strict';
/*
Создайте объект пользователя с паролем.
С помощью функции ниже удалить пароль сделав
функцию сброса пароля
*/
const user = {
    login:'graffit501',
    password: '1234',
    name: 'sergey',
    age:33
}
function removePassword(reset) {
if (reset) {
this.password = undefined;
} else {
this.password = '1';
}
}


const resetpassword  = removePassword.bind(user);
removePassword.call(user,false)


//resetpassword(false)
//resetpassword2()
console.log(user)