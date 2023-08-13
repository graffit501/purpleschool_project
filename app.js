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
    document.querySelector(".panel").innerText = input;
    document.querySelector('.input').value = "";
    localStorage.setItem(keynumber,input);
    console.log(keynumber)
    keynumber++;
    localStorage.setItem('keynumber', keynumber)

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
     
}
function getselector(selector){
    console.log( document.querySelector(selector).innerText);
}
