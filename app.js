const users = [
    {name:'Вася',age:32},
    {name:'Аня',age:32},
    {name:'Петя',age:32},
    {name:'Катя',age:32}
]
const sorttUser = users.sort((a,b)=>{
    if(a.name > b.name){
        return 1
    }
    else{
        return -1
    }

});
console.log(sorttUser)