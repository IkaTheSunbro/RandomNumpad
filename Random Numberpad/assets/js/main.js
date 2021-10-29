const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(){
    numbers.sort((a, b) => 0.5 - Math.random());
    let num1 = document.getElementById("num1");
num1.innerText = numbers[0];
let num2 = document.getElementById("num2");
num2.innerText = numbers[1];
let num3 = document.getElementById("num3");
num3.innerText = numbers[2];
let num4 = document.getElementById("num4");
num4.innerText = numbers[3];
let num5 = document.getElementById("num5");
num5.innerText = numbers[4];
let num6 = document.getElementById("num6");
num6.innerText = numbers[5];
let num7 = document.getElementById("num7");
num7.innerText = numbers[6];
let num8 = document.getElementById("num8");
num8.innerText = numbers[7];
let num9 = document.getElementById("num9");
num9.innerText = numbers[8];
let num10 = document.getElementById("num10");
num10.innerText = numbers[9];


}

shuffle();