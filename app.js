const str = "Вася aka Terminator Perdinator Пупкин";


console.log(`${str.slice(0,str.indexOf('я')+1)} ${str.slice(str.indexOf("П"),str.length)}`)