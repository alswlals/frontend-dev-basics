/**
 * Arrow Function
 */

const power = function(x){
    return x * x;
}
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(n){
    process.stdout.write(`${n}: ${power(n)}\t`);
});

/* ex01 */
console.log("\n----------\n");
const power2 = x => x*x;
numbers.forEach(function(n){
    let result = (function(x){
        return x * x
    })(n);
    process.stdout.write(`${n}: ${result}\t`);
});

/* ex02 화살표 함수 */
console.log("\n----------\n");
numbers.forEach(function(n){
    let result = ((x)=> {return x*x})(n);
    process.stdout.write(`${n}: ${result}\t`);
})

/* ex02-1 화살표 함수 */
console.log("\n----------\n");
numbers.forEach(function(n){
    let result = (x=> x*x)(n);    
    process.stdout.write(`${n}: ${result}\t`);
})

/* ex03 */
console.log("\n----------\n");
numbers.forEach((n)=> process.stdout.write(`${n}: ${(x => x*x)(n)}\t`));

/* ex04  여러 행 함수 */
console.log("\n----------\n");
[5, 4, 3, 73, 135, 4525, 43].forEach(e => {
    if(e%5){
        process.stdout.write(`${e}: ${(x => x*x)(e)}\t`)
    }
});

/* ex05 - this를 어휘적으로 바인딩(Lexical Bind) */
// console.log("\n----------\n");
// const dooly = {
//     name : '둘리',
//     friends : ['또치', '마이콜', '도우너', '길동'],
//     printFriends: function(){
//         this.friends.forEach(function(f){
//             console.log(this)
//             console.log(`${this.name}의 친구 ${f}`);
//         })
//     }
// }

/* ex05-1 화살표 함수 */
console.log("\n----------\n");
const dooly = {
    name : '둘리',
    friends : ['또치', '마이콜', '도우너', '길동'],
    printFriends: function(){
        this.friends.forEach((f)=> console.log(`${this.name}의 친구 ${f}`))
    }
}

dooly.printFriends();