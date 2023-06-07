/*
Методом prompt получите ответ пользователя на вопрос 
"Сколько будет 7 + или - 15?". Если ответ верен, выведите 
в консоли "Успех", если нет - "Вы робот!", а если он введёт 
"Я не робот", то тоже "Успех".
*/
const inputString = prompt('Сколько будет 7 + или - 15?');
/*
if(!isNaN(Number(inputString))){
switch(Number(inputString)){
    case 22:
    case -8:
        console.log('Успех!');
        break;
    default:
        console.log('"Вы робот!"');
    }
}else{
    if(inputString === 'Я не робот'){
        console.log('Успех!');
    }else{
        console.log('"Вы робот!"');
    }
}
*/
switch(true){
    case inputString === 'Я не робот':
    case Number(inputString) === 22:
    case Number(inputString) === -8:
        console.log('Успех!');
        break;
    default:
        console.log('"Вы робот!"');   

}

