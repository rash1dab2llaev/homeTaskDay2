/*1 
function circuitPower(voltage,current) {
    return voltage * current
}
console.log(circuitPower(230,10));
console.log(circuitPower(110,3));
console.log(circuitPower(480,20));
 */


/* 2
function divisibleByFive(num) {
    num % 5 == 0 ? console.log(true) : console.log(false);
}
divisibleByFive(5)
divisibleByFive(-55)
divisibleByFive(37)*/


/* 3
function dividesEvenly(a, b) {
    console.log(Number.isInteger(a / b));
}
dividesEvenly(98, 7)
dividesEvenly(85, 4) */


/*4 
function points(num1, num2) {
    let firstBall = 2
    let secondBall = 3
    console.log(num1 * firstBall + num2 * secondBall);
}
points(1, 1)
points(7, 5)
points(2, 2) */


/* 5
function isSameNum(a, b) {
    a == b ? console.log(true) : console.log(false);
}
isSameNum(4, 8)
isSameNum(2, 2)
isSameNum(10, 10) */


/*6
 function potatoes(num) {
    if (num>0) {
        console.log(-num);
    }else{
        console.log(Math.abs(num));
    }
    
}
potatoes(2)
potatoes(-4) */


/* 7
function longestTime(clock, minut, secund) {

    let parseClock = clock * 60 * 60
    let parseMinut = minut * 60

    if (parseClock > parseMinut && parseClock > secund) {
        console.log(parseClock / 60 / 60);
    } else if (parseMinut > parseClock && parseMinut > secund) {
        console.log(parseMinut / 60);
    } else {
        console.log(secund);
    }
}

longestTime(1, 59, 3598)
longestTime(2, 300, 15000)
longestTime(15, 955, 59400) */

/* 8
function largestSwap(num) {
    let first = String(Math.floor(num % 10))
    let second = String(Math.floor(num / 10))
    let res = first + second
    if (num > +(first + second)) {
        console.log(true);
    } else {
        console.log(false);
    }
}

largestSwap(14)
largestSwap(53) */


/* 9
function solveForExp(a, b) {
    let k = 0
    for (let i = 1; i < b; i *= a) {
        k++
    }
    console.log(k);
}

solveForExp(4, 1024)
solveForExp(2, 1024)
solveForExp(9, 3486784401) */