/* Array 객체 함수: Array.prototype. */

var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'banana', 'mango'];

/* concat */
console.log("===== concat =====");
var a1 = fruits.concat(colors);
console.log(a1);

/* pop, push : stack 지원 */
console.log("===== stack 지원 =====");
var color = colors.pop();
console.log(color);

colors.push('red');
console.log(colors);

/* join */
console.log("===== join =====");
var str = fruits.join(":");
console.log(str);

/* reverse */
console.log("===== reverse =====");
fruits.reverse();
console.log(fruits);


/* shift : 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환 */
console.log("===== shift =====");
var numbers = [1000, 3000, 2000, 5000, 4000, 8000];
var number = numbers.shift();
console.log(number, numbers);

/* slice */
console.log("===== slice =====");
var numbers1 = numbers.slice(1, 3);
console.log(numbers1);

/* splice: 1. index에서 count개를 삭제하고 삭제된 요소를 배열에 담아 반환 */
console.log("===== slice(index, count) =====");
console.log(fruits);
var fruits2 = fruits.splice(0,2);
console.log(fruits2, fruits);

/* splice: 2. index에서 count개를 삭제하고 replace로 대체한 후, 삭제된 요소를 배열에 담아 반환 */
console.log("===== slice(index, count, replace) =====");
var a1 = [0, 1, 2, 3, 4];
var a2 = a1.splice(1, 3, 10);
console.log(a1, a2);

// var a2 = a1.splice(1, 3, [10, 20]);
// console.log(a1, a2);
// 결과값: [ 0, [ 10, 20 ], 4 ] [ 1, 2, 3 ]

/* splice: 3. removeAt()처럼 작동 */
console.log("===== removeAt() =====");
var a3 = [0, 1, 2, 3, 4];
a3.splice(2, 1); /* removeAt(2) */
console.log(a3);

/* splice: 4. insertAt()처럼 작동 */
console.log("===== insertAt() =====");
var a4 = [0, 1, 2, 3, 4];
a4.splice(1, 0, 10); /* insertAt(1, 10) */
console.log(a4);