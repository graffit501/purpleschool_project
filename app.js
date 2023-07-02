
const users = [
{
name: 'Вася',
surname: 'Пупкин',
age: 30,
skills: ['Разработка', 'Dev0ps']
},
{
name: 'Катя',
surname: 'Белова',
age: 18,
skills: ['Дизайн']
},
]

const resultarr =  users.map((value)=>{
    return {fulname: `${value.name} ${value.surname}`,
            skillNum: value.skills.length     
        }
});

console.log(resultarr)