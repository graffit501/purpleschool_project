/*
Дан произвольный url вида - https://purpleschool.ru/course/javascript
Нужно сделать функцию, которая выводит в консоль:
Протокол (https)
Доменное имя (purpleschool.ru)
Путь внутри сайта (/course/javascript)
 
*/



const  url = 'https://purpleschool.ru/course/javascript';
const urlArr = url.split('/');
//console.log(urlArr);
getUrl(url);

function getUrl(url){
    const [protocol,_,name,...other] = url.split('/');
    if(protocol !=='https:'){
        return;
    }
    console.log(protocol.slice(0,-1));
    console.log(name);
    console.log(other.join('/'))

}