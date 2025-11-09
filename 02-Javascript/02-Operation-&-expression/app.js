// console.log("hello world");
// console.log(20);
// console.log(true);

// console.log(typeof("hello"));



//Arithmatic Operator

// +
// -
// *
// /
// % == modulus

// console.log(20 + "20"); // concatination
// console.log(20 + 10);
// console.log(20 - 10);
// console.log(20 * 10);
// console.log(20 / 10);

// console.log(20 % 2); // division ka remainder






//Assignment Operator
// =
// +=
// -=
// /=
// *=


// var num1 = 20;
// var num2 = 20;
// console.log(num1 + num2);

// var num = 10;
// var num = 20; // redeclare
// num = 25 // reassign

// var num = 10;
// // num = num + 20;
// // num += 20;
// // num -= 10
// // num = num - 10
// // num *= 10
// // num = num * 10
// num /= 2
// console.log(num);



// preincrement and post increment

// ++ ==> +1

// var num = 10;
// console.log(++num);

// pre and post

// pre ==> ++num
// post ==> num++


// console.log(num++); // 11
// console.log(++num);








// comparision operator (hamesha boolean return karta ha)

// >
// <
// ==
// === (data type bhi check krta ha)
// !=
// !== x
// >=
// <=


// console.log(10 > 5);
// console.log(10 < 5);
// console.log(10 > 10);
// console.log(10 == 101);
// console.log(10 >= 10);
// console.log(10 <= 9);

// console.log(10 == "10"); // single equals to
// console.log(10 === "10"); // double equals to

// double equals to data type bhi check krta ha.

// console.log(10 != "10"); // false
// console.log(10 !== "10"); // true

// != not equal to
// !== not double equal to

// console.log(10 != 11);
// console.log(10 !== 11);
// console.log(10 !== "10");



//logical Operator

//&& == OR 
//|| == YAA



// true && true && false
// console.log(true && false && true);
// console.log(true || false || true);



// Assignment 01 (alert and prompt)

// Solution 01

// var username = prompt("enter your name");
// alert("Hello " + username)

// Solution 02

// var username = prompt("enter your name");
// var hobby = prompt("enter your hobby");
// var country = prompt("enter your country");

// // "Hi, I'm [name] from [country], and I love [hobby]!"
// alert("Hi, I'm " + username + " from " + country + " and I love " + hobby)


// true && false || true && false || true
// false || false || true
// true


// 15 !== 15 && 8 * 2 !== 20 || 'hello' === 'world' && 10 > 15 || 6 === '6'

// false && true || false && false || false
// false || false || false
// false

// console.log(15 !== 15 && 8 * 2 !== 20 || 'hello' === 'world' && 10 > 15 || 6 === '6');



// 9 > 8 && 3 + 7 === 11 || 4 !== '4' && 10 - 2 === 8 || 5 * 3 === 15
// true && false || true && true || true
// false || true || true
// true
console.log(9 > 8 && 3 + 7 === 11 || 4 !== '4' && 10 - 2 === 8 || 5 * 3 === 15);


// 0 === false && 7 * 2 === 14 || 'True' === true && 5 !== '5' || 6 + 6 === 12
// 'a' !== 'A' && 3 * 3 === 9 || 4 < 4 && 10 / 2 === 5 || 8 === '8'
// 100 / 10 === 10 && 7 === 7 || 3 * 2 !== 7 && 'hello' === 'hello' || 9 > 12
// 20 / 4 === 5 && 3 + 5 === 8 || 8 === 8 && 'yes' !== 'YES' || 12 === '12'
// 6 > 5 && 4 * 2 !== 10 || 7 === 6 + 1 && 'no' === 'yes' || 100 !== 100
// 5 === '5' || 8 / 2 !== 5 && 4 + 6 === 11 || 9 === 8 + 1 && 'abc' !== 'ABC'

// true && false || 4 * 2 === 8 && 'hello' === 'hello' || 5 !== '5' && 3 < 5
// false && true || 'red' === 'blue' && 5 + 5 === 10 || 6 === '6' && 9 > 8
// 'dog' === 'dog' && 3 * 3 === 9 || false && 5 === 5 || 7 === '7'
// true || false && 4 * 4 === 16 || 'cat' !== 'dog' && 3 < 5 || 10 / 2 === 5
// false && true || 5 * 3 === 15 || 6 > 8 && 7 + 1 === 8 || 'test' === 'test'
// true && false || 8 / 2 === 4 && 3 + 2 === 5 || 9 !== 9 && 'green' === 'green'
// false && 5 > 10 || 7 === '7' && 4 * 5 === 20 || true && false
// true && 'hello' === 'hello' || 9 * 2 === 18 && 6 + 2 === 8 || false && 7 > 3
// 'apple' === 'apple' && 2 + 3 === 5 || false && true || 10 - 5 === 5 || 5 === '5'

// 'apple' === 'apple' && 3 + 4 === 7 || 6 * 2 !== 12 && 10 - 5 === 5 || 'Java' !== 'java'
// true && true || false && true || true
// true || false || true

// console.log('apple' === 'apple' && 3 + 4 === 7 || 6 * 2 !== 12 && 10 - 5 === 5 || 'Java' !== 'java');




// 15 * 2 !== 30 && 5 === 5 || 'cat' === 'dog' && 7 / 2 === 3.5 || 20 > 10
// false && true || false && true || true
// false || false || true


// 8 * 3 === 24 && 100 / 10 === 10 || 'red' !== 'green' && 9 + 1 === 10 || 5 === 5
// 10 > 8 && 7 * 2 === 14 || 3 - 1 === 2 && 'sun' === 'sun' || 'hello' !== 'HELLO'
// 0 !== '0' && 9 + 5 === 14 || 3 * 3 === 9 && 'apple' === 'apple' || 12 / 3 === 4
// 'hi' !== 'HI' && 7 + 2 === 9 || 10 / 2 === 5 && 'bar' !== 'bar' || 3 > 4
// 100 / 5 === 20 && 'dog' !== 'dog' || 12 * 2 === 24 && 9 === 9 || 'red' === 'blue'
// 'true' !== true && 4 + 6 === 10 || 8 / 4 === 2 && 15 - 5 === 10 || 'yes' === 'YES'
// 5 * 5 === 25 && 3 - 1 === 2 || 20 !== '20' && 10 === 10 || 'test' !== 'TEST'
// 'cat' !== 'dog' && 4 * 5 === 20 || 7 + 2 === 9 && 2 !== 1 || 12 / 3 === 4
// 9 > 8 && 6 * 2 === 12 || 3 + 7 !== 10 && 'apple' === 'apple' || 6 === '6'
// 'hello' === 'hello' && 4 * 3 === 12 || 10 / 5 === 2 && 5 !== 5 || 'world' !== 'WORLD'
// 20 - 5 === 15 && 'a' !== 'A' || 3 * 2 === 6 && 5 === '5' || 7 > 6
// 4 + 4 === 8 && 6 * 3 === 18 || 5 !== '5' && 'dog' === 'dog' || 12 === 12
// 'false' === 'false' && 10 - 4 === 6 || 3 / 3 === 1 && 7 === 7 || 8 * 2 === 16
// 'blue' !== 'green' && 9 + 6 === 15 || 5 === 5 && 8 / 4 === 2 || 'apple' === 'banana'
// 8 * 2 === 16 && 5 + 4 === 9 || 6 === '6' && 10 - 3 === 7 || 7 * 2 !== 16
// 5 + 2 === 7 && 'red' === 'red' || 3 * 4 === 12 && 'dog' !== 'cat' || 10 - 5 === 5
// 7 * 3 === 21 && 12 / 4 === 3 || 5 + 6 === 11 && 'blue' !== 'green' || 'yes' !== 'YES'
// 'false' === false && 4 * 2 === 8 || 3 - 2 === 1 && 10 / 5 === 2 || 'a' !== 'A'
// 6 + 6 === 12 && 'yellow' === 'yellow' || 8 !== 8 && 3 * 3 === 9 || 'hello' !== 'HELLO''