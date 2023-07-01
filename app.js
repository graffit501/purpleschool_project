/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = ' +7(910) 323-53-56 ';
/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
const num4Error = '89103g35356';


function isNumber(number){
    let formstring = number.replace("+","");
    formstring = formstring.replace("(","");
    formstring = formstring.replace(")","");
    formstring = formstring.replace("+7","8");
    formstring = formstring.replaceAll(" ","");
    formstring = formstring.replaceAll("-","");
    if(formstring.length != 11){
        return false
    }
    if(isNaN(formstring)){
        return false
    }
    if(!formstring.startsWith("8")){
        return false
    }    
    return true
}
console.log(isNumber(num3Error));