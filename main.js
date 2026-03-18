for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("Числа от 1 до 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Чётные числа от 1 до 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Сумма чисел от 1 до 10:", sum);



let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}

let number = 5;

while (number >= 0) {
    console.log(number);
    number--;
}



let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++;
} while (doValue < 3);

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    if (i === 8) {
        break;
    }
    console.log(i);
}



for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}




function sum(a, b) {
    return a + b;
}

console.log(sum(3, 5));

function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 6));



function sayHello(name) {
    console.log(`Hello, ${name}`);
}
sayHello("Тимофей")


function printInfo(name, age) {
    console.log(`Имя: ${name}, Возраст: ${age}`);
}

printInfo("Влад", 18);


function greet(name = "Гость") {
    console.log("Привет, " + name);
}
greet();
greet("Анастасия");


function calculateDiscount(price, discount = 10) {
    let finalPrice = price - (price * discount / 100);
    return finalPrice;
}

console.log(calculateDiscount(500, 20));
console.log(calculateDiscount(1000));



const add = function(a, b) {
    return a + b;
};

console.log(add(2, 3));



function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());


function sumFunc(a, b) {
    return a + b;
}

const sumFunc2 = (a, b) => a + b;

const double = x => x * 2;

const sumFunc3 = (a, b) => a + b;

const sayGreeting = () => console.log("Hello");


const square = x => x ** x;

const calculate = (a, b) => {
    let result = a + b;
    return result * 2;
};