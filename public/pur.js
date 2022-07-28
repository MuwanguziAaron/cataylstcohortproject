function aaron(){
let dealer = document.purchase.xar;
let dealer1 =document.getElementById('info');

// regex = /^[a-zA-Z]+$/
let regex = /^[0-9]+$/
if(dealer.value.length <= 3){
    dealer.style.border = '3px solid red'
    dealer1.textContent = "should be greaterthan 3charaters"
    dealer1.style.color = 'red';

}
// ! means not
// else if(!dealer.value.match(regex)){
//     dealer.style.border = '3px solid red'
//     dealer1.textContent = "enter only numbers"
//     dealer1.style.color = 'red';

// }
else{
    dealer.style.border = '3px solid green'
    dealer1.textContent = ""
    dealer1.style.color = 'green';

}
}

function contact(){
var phone = document.purchase.tele;
var phone2 = document.getElementById('city')

let regex = /^[0-9]+$/
if(!phone.value.match(regex)){
    phone.style.border = '2px dotted red'
    

}
//still failing
else if(phone.value.length <3 && tele>10)
phone2.textContent = "enter only numbers"
}

