/**
 * 변수와 자료형(Data Type)
 * 
 * [기본 타입(Primityve Type]
 * - undefined
 * - number
 * - string
 * - boolean
 * 
 * [객체]
 * - object
 *      1. new 생성자함수() 사용해서 생성
 *          Number()  => object 타입의 객체
 *          String()  => object 타입의 객체
 *          Boolean() => object 타입의 객체
 *          Object()  => object 타입의 객체
 *          Array()   => object 타입의 객체
 *          Date()    => object 타입의 객체
 *          RegExp()  => object 타입의 객체
 *      2. {}
 *      3. []
 *      4. null
 * 
 * - function
 * 
 */

console.log("=== 기본 타입(undefined, number, string, boolean) ===");
var u = undefined; /* var u; 동일, 선언과 정의를 구분하지 않는다. */
var i = 10;
var s = 'hello world';
var b = true;

console.log(u + ":" + typeof(u));
console.log(i + ":" + typeof(i));
console.log(s + ":" + typeof(s));
console.log(b + ":" + typeof(b));

console.log("=== 객체 타입(object) === ");
var i2 = new Number(10);
var s2 = new String('hello world');
var b2 = new Boolean(true);
var o = new Object();
var a = new Array();
var d = new Date();

console.log(i2 + ":" + typeof(i2));
console.log(s2 + ":" + typeof(s2));
console.log(b2 + ":" + typeof(b2));
console.log(o + ":" + typeof(o));
console.log(a + ":" + typeof(a));
console.log(d + ":" + typeof(d));

console.log(typeof(Number));


function Student(name){
    // console.log(name);
    this.name - name;
}
Student("둘리");