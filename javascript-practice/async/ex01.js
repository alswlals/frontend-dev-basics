
const myAsyncFn01 = function(param, callback){
    /**
     * 비동기 코드
     * 파일 시스템 접근(file io), 네트워크 통신, SQL to DB, setTimeout
     * 비동기 코드는 timtout으로 잡아놨음
     */
    setTimeout(function(){
        if(param === 'data'){
            callback(null, 'ok');
        } else{
            callback(new Error('fail'), null);
        }
    }, 2000);
}

/** 
 * test01: success
 * asyncEx01('정해진 데이터', callback 함수)
 */
myAsyncFn01('data', function(error, result){
    if(error){
        console.error(error);
        return;
    }
    console.log(result);
});

/** 
 * test02: fail
 * 콜백 지옥 가능 -> 탈출 방법은 ex02.js 의 promise 사용
 */
myAsyncFn01('', function(error, result){
    if(error){
        console.error(error);
        return;
    }
    console.log(result);
});

console.log("wait.......");