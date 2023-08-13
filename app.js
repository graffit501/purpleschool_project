'use strict'
function submitForm(){
    const input  = document.querySelector('.input').value;
    if(!input){
        return
    }
    document.querySelector(".panel").innerText = input;
    document.querySelector('.input').value = "";
}
function inputChange(e){
    if(e.code == 'Enter'){
        submitForm()
    }
}
function gettag(){
    
    document.querySelectorAll('div.one').forEach((element)=>{console.log(element.innerText)})
    getselector("div#two");
    getselector('span[user-id = "4"]')
    
}
function getselector(selector){
    console.log( document.querySelector(selector).innerText);
}
