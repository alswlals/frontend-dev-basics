/**
 * Unnamed export: default 키워드를 사용한다.
 */

export default function(a, b){
    return a + b;
}

/* 
    오류 : 이름 없이 export 하기 때문에 하나만 export 할 수 있다(default 를 두개 사용했기에 오류)
    export default function(a, b){
        return a - b;
     }
 */

