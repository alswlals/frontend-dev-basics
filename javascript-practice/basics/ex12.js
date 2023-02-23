/** 
  Array 확장(prototype 기반의 확장) 
  List 함수
 */

  Array.prototype.remove = function(index){
    this.splice(index,1);
  }

  Array.prototype.insert = function(index, value){
    // 배열이 아니게 넣기
    if(value instanceof Array){
        // for(var i = 0; i < value.length; i++){  // 구문
        //     this.splice(index+i, 0, value[i]);
        // } 

        /*  
            this에는 splice function이 없다는 error 발생
            콜백 함수 안의 this는 어휘상의 this와 일치하지 않는다. 

            value.forEach(function(e){ // 표현식(함수호출식)
            // console.log(this); //전역함수(지금 현재 실행되고 있는 값들을 저장하는 )
            this.splice(index++, 0, e); 
        });
        */
        

        /* 해결방법 1 : 어휘상의 this로 일치시켜주기*/
        console.log(this); //[ 1, 2, 4 ] -> 먼저 확인시켜주기
        var _this = this;
        value.forEach(function(e){ // 표현식(함수호출식)
            _this.splice(index++, 0, e); 
        });

        /* 
            해결방법 2 : Function.prototype.bind() 함수 사용
            콜백 함수 블록 안의 this를 세팅할 수 있다.
        */
        value.forEach(function(e){
            this.splice(index++, 0, e); 
        }.bind(this));
    } else {
        this.splice(index, 0, value);
    }
  }


  /* List 함수 사용하기 */
  var a = [1, 2, 4];
  console.log(a);
  
  a.insert(2, 3);
  console.log(a);

  a.remove(2);
  console.log(a);

  a.insert(2, ['a', 'b', 'c']);
  console.log(a);

//   a.insert(2, ('a', 'b', 'c'));
//   console.log(a);

//   a.insert(2, 'a', 'b', 'c');
//   console.log(a);