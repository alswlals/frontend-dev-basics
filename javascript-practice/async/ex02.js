
const myAsyncFn02 = function(param){
    return new Promise(function(resolve, reject){
        /**
         * 비동기 코드
         * 파일 시스템 접근(file io), 네트워크 통신, SQL to DB, setTimeout
         */
        setTimeout(function(){
            if(param === 'data'){
                resolve('ok');
            } else{
                reject(new Error('fail'));
            }
        }, 2000);
    });
}

if(require.main == module) {
    /**
     * promise 자체를 반환해줌
     * 콜백은 있지만 직접적으로 넣지는 않음(콜백 지옥 탈출)
     */
    myAsyncFn02('data')
        .then(function(result){
            console.log(result);
        })
        .catch(function(error){
            console.error(error);
        });

    console.log("wait.......");
} else {
    module.exports = myAsyncFn02; // 원래는 import 파일은 .mjs 사용해야 하는데 require 사용해 기본 .js로 사용
}
//if(require.main == module)에 넣어줌으로써 ex03은 실행 x