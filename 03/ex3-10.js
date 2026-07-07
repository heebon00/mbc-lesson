//변수: 두번이상 사용할 수 있는 메모리 공간
//변수 문법: 선언할수 있는 키워드( var, let, const ) + 변수 이름 + 값
//키워드 종류 : let , const, var
//let > 값의 재할당이 가능하다

let a; // 변수 a를 선언
a = 10;
cosnole.log(a+a+a+a); // 10
a = "20";
cosnole.log(a+a+a+a); // 20202020
//let a = 'aaa'; // 같은 식별자로 선언 불가 

//const > 값의 재할당이 불가능하다
const b;
b = 10;
cosnole.log(a+b); // 

var // 예전버전  쓰지마. 윈도우7 브owser에서만 사용가능
var c = 30;
var d;
// 값 재할당, 변수의 중복선언 가능.

