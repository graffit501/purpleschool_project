/*Дан список задач
const tasks = ['Задача 1'];

Сделать функции:
Добавление задачи в конец
Удаление задачи по названию
Перенос задачи в начало списка по названию
! Всегда меняем исходный массив*/

const testArray = ['admin','manager','ceo','user'];

function deleteItemArray(array, item){
    const indexItem = array.indexOf(item);
    if(indexItem!=-1) {        
        array.splice(indexItem,1)
    }
}
function addItemArray(array,item){
   array.push(item);
}
function changeIndexItemArray(array,item){
    if(array.includes(item)){
        const indexItem = array.indexOf(item);
        array.splice(indexItem,1)
        array.unshift(item);

    }
}
deleteItemArray(testArray,'manager');
changeIndexItemArray(testArray, 'user');
addItemArray(testArray,'superuser')
console.log(testArray)