/* null과 undifined */

var myVar1 = undefined; /* 명시적으로 undefined 대입 */
var myVar2;             /* 명시적으로 undefined 대입 */
var myVar3 = null;      /* Object가 없다는 뜻으로 사용? 대충 ,, 명시 안하는 ,, */

console.log(myVar1 + " : " + myVar2 + " : " + myVar3);

/* undefined와 null의 동치(equal) 비교 */
console.log(myVar1 == myVar3); /* 값 비교 */
console.log(myVar1 === myVar3);/* 타입 비교 + 값 비교 */

console.log("====================");
/* == : equality, 값의 동치성을 따짐, 형변환 */
console.log('4' == 4);
console.log(false == 0);
console.log('abc' == new String('abc'));

console.log(true + 10); // 11
console.log('abc' + new String('abc')); // abcabc
console.log(1+'11'); //111
console.log('11'+1); //111


console.log("====================");
/** === : Identity 
 * 1. 타입의 동일성
 * 2. 타입이 같은 경우
 *      2-1. primitive type: 값의 동일성
 *      2-2. object type: 객체의 동일성
*/

console.log('4'===4);
