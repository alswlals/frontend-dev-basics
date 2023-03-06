/**
 * Named export II
 * 1. exports(require.js)와 유사
 * 2. destructing이 가능
 */

 const add = function(a, b){
    return a + b;
}
 const substract = function(a, b){
    return a - b;
}

export {add, substract};

