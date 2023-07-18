
/*
Дополнить объект методом для получения имени:
- компании
- сео
- сотрудника
*/

const company = {
    name: "ООО Агро",
    employees: [
        {
            name: "Света",
            age: 25,
            job:"менеджер",
            getname:function(){
                return  this.name
            }
        },
        {
            name: "Иван",
            age: 25,
            job:"оператор",
            getname:function(){
                return  this.name
            }
        },
       
    ],
    ceo: {
        name: "Вася",
        lastname: "Иванов",
        getfullceo:function(){
            return `Директор ${this.name} ${this.lastname}`
        }
    },
    getname: function(){
        return `название компании ${this.name}`
    },
    getfullemployee: function(){
        const result = this.employees.map((value)=>{
            return `Имя: ${value.name} Возраст  ${value.age} Должность:${value.job}`
        })
        return result
    }
};

console.log(company.getname());
console.log(company.ceo.getfullceo())
console.log(company.getfullemployee())
console.log(company.employees.map(employee => employee.getname()))
