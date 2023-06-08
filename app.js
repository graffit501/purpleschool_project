/*
Пользователь:
Возраст
Наличие работы
Деньги
Нужно проверить может ли он купить новый MacBook за 2000$?
 Он может брать не только свои деньги, но и взять кредит. 
 Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае.
  Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false*/


function issuanceOfCredit(age,job){
    switch(true){
        case age>=24 && job:
            return 500;
        case age>=24 && !job:
            return 100;
        default:
            return 0;
    }
}
function buyingLaptop(prodctPrice,age,job,money){
    if(money>= prodctPrice){
        return true
    }else{
        const creditResult = issuanceOfCredit(age,job);
        return Number(money)+Number(creditResult) >= prodctPrice;
    }
}
console.log(buyingLaptop(2000,24,false,1900));