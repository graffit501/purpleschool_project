/*сделать объект склад с методами добавления на склад поиска по складу товара и расчета веса*/


const warehouse = {
    goods:[],
    findGoodById:function(id){
        return this.goods.find(value=>value.id = id);
    },
    addGood:function(element){
        const existGoods = this.goods.some(item =>{
            return item.id === element.id
        });
        if(existGoods){ 
            console.log(`товар с id ${element.id} уже существует`)
            return }
        this.goods.push(element);
    },
    getWeigntkg: function(){
        const result = this.goods.reduce((acc,value)=>{
            if(value.weight?.kg){
                return acc+value.weight.kg
            }
            return acc
        },0);

        return result

    }
}

const car = {
    id:1,
    weight:{
        kg:1000
    },
    brand:"ford"
}
const chair = {
    id:2,
    weight:{
        kg:2
    },
    
}
const  brak = {
    id:3,
    color:"red"
}
const  brak2 = {
    id:3,
    color:"red"
}
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(brak);
warehouse.addGood(brak2);
console.log(warehouse)
console.log(warehouse.findGoodById(1));
console.log(warehouse.getWeigntkg());