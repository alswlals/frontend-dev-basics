/* async await 사용해서 깔끔하게 만들기 */
const fetch = require('./ex02'); /* 이렇게만 써도 실행되는 게 문제 -> ex02.js에 if(require.main == module)에 넣어줌으로써 실행 x */

const ex03 = async function(param){
    /* error - try catch */
    try{
        const data = await fetch(param);
        console.log(data)
    } catch(err){
        console.error(err)
    }
}

ex03("");
console.log("wait....")