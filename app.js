let b1= document.querySelector(".one");
let b2= document.querySelector(".two");
let b3= document.querySelector(".three");
let b4= document.querySelector(".four");
let b5= document.querySelector(".five");
let b6= document.querySelector(".six");
let b7= document.querySelector(".seven");
let b8= document.querySelector(".eight");
let b9= document.querySelector(".nine");
let pr=document.querySelector("h2");
function f1(){
    let btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9;
    btn1= document.querySelector(".one").innerText;
    btn2= document.querySelector(".two").innerText;
    btn3= document.querySelector(".three").innerText;
    btn4= document.querySelector(".four").innerText;
    btn5= document.querySelector(".five").innerText;
    btn6= document.querySelector(".six").innerText;
    btn7= document.querySelector(".seven").innerText;
    btn8= document.querySelector(".eight").innerText;
    btn9= document.querySelector(".nine").innerText;
    if((btn1=='X' && btn2=='X' && btn3=='X') || (btn1=='0' && btn2=='0' && btn3=='0')){
        if(btn1=='X'){
            pr.innerText="A Won";
        }
        else{
            pr.innerText="B Won"
        }
        b4.classList.add("disabled");
        b5.classList.add("disabled");
        b6.classList.add("disabled");
        b7.classList.add("disabled");
        b8.classList.add("disabled");
        b9.classList.add("disabled");
        b1.style.backgroundColor="red";
        b2.style.backgroundColor="red";
        b3.style.backgroundColor="red";
    }
    else if((btn1=='X' && btn5=='X' && btn9=='X') || (btn1=='0' && btn2=='0' && btn3=='0')){
    
        if(btn1=='X'){
            pr.innerText="A Won";
        }
        else{
            pr.innerText="B Won";
        }
        b2.classList.add("disabled");
        b3.classList.add("disabled");
        b4.classList.add("disabled");
        b6.classList.add("disabled");
        b7.classList.add("disabled");
        b8.classList.add("disabled");
        b1.style.backgroundColor="red";
        b5.style.backgroundColor="red";
        b9.style.backgroundColor="red";
    }
    else if((btn4=='X' && btn5=='X' && btn6=='X') || (btn4=='0' && btn5=='0' && btn6=='0')){
    
        if(btn4=='X'){
            pr.innerText="A Won";
        }
        else{
            pr.innerText="B Won";
        }
        b1.classList.add("disabled");
        b2.classList.add("disabled");
        b3.classList.add("disabled");
        b7.classList.add("disabled");
        b8.classList.add("disabled");
        b9.classList.add("disabled");
        b4.style.backgroundColor="red";
        b5.style.backgroundColor="red";
        b6.style.backgroundColor="red";
    }
    else if((btn7=='X' && btn8=='X' && btn9=='X') || (btn7=='0' && btn8=='0' && btn9=='0')){
    
        if(btn7=='X'){
            pr.innerText="A Won";
        }
        else{
            pr.innerText="B Won";
        }
        b1.classList.add("disabled");
        b2.classList.add("disabled");
        b3.classList.add("disabled");
        b4.classList.add("disabled");
        b5.classList.add("disabled");
        b6.classList.add("disabled");
        b7.style.backgroundColor="red";
        b8.style.backgroundColor="red";
        b9.style.backgroundColor="red";
    }
    else if((btn1=='X' && btn4=='X' && btn7=='X') || (btn1=='0' && btn4=='0' && btn7=='0')){
    
        if(btn1=='X'){
            pr.innerText="A Won";
        }
        else{
            pr.innerText="B Won";
        }
        b2.classList.add("disabled");
        b3.classList.add("disabled");
        b5.classList.add("disabled");
        b6.classList.add("disabled");
        b8.classList.add("disabled");
        b9.classList.add("disabled");
        b1.style.backgroundColor="red";
        b4.style.backgroundColor="red";
        b7.style.backgroundColor="red";
    }
    else if((btn2=='X' && btn5=='X' && btn8=='X') || (btn2=='0' && btn5=='0' && btn8=='0')){
    
        if(btn2=='X'){
            pr.innerText="A Won";
        }
        else{
            pr.innerText="B Won";
        }
        b1.classList.add("disabled");
        b3.classList.add("disabled");
        b4.classList.add("disabled");
        b6.classList.add("disabled");
        b7.classList.add("disabled");
        b9.classList.add("disabled");
        b2.style.backgroundColor="red";
        b5.style.backgroundColor="red";
        b8.style.backgroundColor="red";
    }
    else if((btn3=='X' && btn6=='X' && btn9=='X') || (btn3=='0' && btn6=='0' && btn9=='0')){
    
        if(btn3=='X'){
            pr.innerText="A Won";
        }
        else{
            pr.innerText="B Won";
        }
        b2.classList.add("disabled");
        b1.classList.add("disabled");
        b4.classList.add("disabled");
        b5.classList.add("disabled");
        b7.classList.add("disabled");
        b8.classList.add("disabled");
        b3.style.backgroundColor="red";
        b6.style.backgroundColor="red";
        b9.style.backgroundColor="red";
    }
    else if((btn3=='X' && btn5=='X' && btn7=='X') || (btn3=='0' && btn5=='0' && btn7=='0')){
        if(btn3=='X'){
            pr.innerText="A Won";
        }
        else{
            pr.innerText="B Won";
        }
        b2.classList.add("disabled");
        b1.classList.add("disabled");
        b4.classList.add("disabled");
        b6.classList.add("disabled");
        b8.classList.add("disabled");
        b9.classList.add("disabled");
        b3.style.backgroundColor="red";
        b5.style.backgroundColor="red";
        b7.style.backgroundColor="red";
    }
    else if((btn1=='X'|| btn1=='0') && (btn2=='X'|| btn2=='0') && (btn3=='X'|| btn3=='0') && (btn4=='X'|| btn4=='0') 
        && (btn5=='X'|| btn5=='0') && (btn6=='X'|| btn6=='0') && (btn7=='X'|| btn7=='0') && (btn8=='X'|| btn8=='0')
        && (btn9=='X'|| btn9=='0')){
         pr.innerText="Match Tied! Press the Reset button!!"   
    }
}
function reset(){
    location.reload();
}
//if button 1 was clicked
let flag=1;
function f2(){
    if(flag==1){
        pr.innerText="B Turn"
        b1.innerText='X';
        flag=0;

    }
    else{
        pr.innerText="A Turn"
        b1.innerText='0';
        flag=1;
    }
    b1.classList.add("disabled");
}
function f3(){
    if(flag==1){
        pr.innerText="B Turn"
        b2.innerText='X';
        flag=0;
    }
    else{
        pr.innerText="A Turn"
        b2.innerText='0';
        flag=1;
    }
    b2.classList.add("disabled");
}
function f4(){
    if(flag==1){
        pr.innerText="B Turn"
        b3.innerText='X';
        flag=0;
    }
    else{
        pr.innerText="A Turn"
        b3.innerText='0';
        flag=1;
    }
    b3.classList.add("disabled");
}
function f5(){
    if(flag==1){
        pr.innerText="B Turn"
        b4.innerText='X';
        flag=0;
    }
    else{
        pr.innerText="A Turn"
        b4.innerText='0';
        flag=1;
    }
    b4.classList.add("disabled");
}
function f6(){
    if(flag==1){
        pr.innerText="B Turn"
        b5.innerText='X';
        flag=0;
    }
    else{
        pr.innerText="A Turn"
        b5.innerText='0';
        flag=1;
    }
    b5.classList.add("disabled");
}
function f7(){
    if(flag==1){
        pr.innerText="B Turn"
        b6.innerText='X';
        flag=0;
    }
    else{
        pr.innerText="A Turn"
        b6.innerText='0';
        flag=1;
    }
    b6.classList.add("disabled");
}
function f8(){
    if(flag==1){
        pr.innerText="B Turn"
        b7.innerText='X';
        flag=0;
    }
    else{
        pr.innerText="A Turn"
        b7.innerText='0';
        flag=1;
    }
    b7.classList.add("disabled");
}
function f9(){
    if(flag==1){
        pr.innerText="B Turn"
        b8.innerText='X';
        flag=0;
    }
    else{
        pr.innerText="A Turn"
        b8.innerText='0';
        flag=1;
    }
    b8.classList.add("disabled");
}
function f10(){
    if(flag==1){
        pr.innerText="B Turn"
        b9.innerText='X';
        flag=0;
    }
    else{
        pr.innerText="A Turn"
        b9.innerText='0';
        flag=1;
    }
    b9.classList.add("disabled");
}