'use strict'
function submitForm(){
    const input  = document.querySelector('.input').value;
    let keynumber  = Number(localStorage.getItem('keynumber'));
    if(!keynumber){
        localStorage.setItem('keynumber',1)
        keynumber = 1;    
    }
    if(!input){
        return
    }
    const keyVal = "key" + keynumber
    const valObj =  {keyVal: "text", "value":{"text":input}}
    let lsStr
    try{
        lsStr =  JSON.stringify(valObj);
    }catch{
        console.log("нихуя не получилось")
    }
    document.querySelector(".panel").innerText = input;
    document.querySelector('.input').value = "";
    localStorage.setItem(keynumber, lsStr);
    keynumber++;
    localStorage.setItem("keynumber",keynumber)
}
function inputChange(e){
    if(e.code == 'Enter'){
        submitForm()
    }
}
function gettag(){    
    document.querySelectorAll('div.one').forEach((element)=>{console.log(element.innerText)})
    getselector("div#two");
    getselector('span[user-id = "4"]');
    const valkey  = document.querySelector('.input').value;
    try{
        let jsObj = JSON.parse(localStorage.getItem(valkey));
        console.log(jsObj);
        document.querySelector('.input').value ="";
    }catch{
        console.log("опять нихуя не получилось")
    }
     
}
function getselector(selector){
    console.log( document.querySelector(selector).innerText);
}
