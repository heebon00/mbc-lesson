/*-------리엑트에서 자주 사용 하는  JS------ */
/*-------------*/
/*----1.변수-----------*/
/*------
1.1. var (금지)
1.2. let 값의 재항당 가능
1.3. const : 값의 재할당 불가-------*/
//{

    let a = 0;
    console.log("a를 0으로 초기화"+ a);
    a = 10;
    console.log("a를 10으로 재할당");
 const b=  "제노";
//const b= "런쥔";
console.log(b);
//const의 배열과 객체
const arr = [1,2,3];
console.log(arr[0]); //1
arr[0] = "제노";
arr[2] = "망고";
console.log(arr[0]); //제노
console.log(arr[2]); // 런쥔
arr.push("5");
console.log(arr);
//arr = [1];
//console.log(arr);
//************ */
////객체의 값변경
const obj = {a:1};
obj.a = 2; // 객체의 값 변경 가능 
console.log(obj.a);
obj.b = 3; // 객체에 새 속성 추가 기능
console.log(obj);
//}
//suger syntax 문법적설탕//
//
//화살표 함수(람다 한수)//
//
{
// 일반 익녕 함수
const add1 = function (a,b) {
    return a+b;
};

//화살표 함수 - 기본형
const add2 = (a,b) => {return a+b;};
//화살표 함수 - 가난한 형태
const add3 = (a,b)  => a+b;
//화살표 함수 - 매개변수 한개
const add4 = (a) => a*2;
//화살표 함수 - 매개변수 없다
const add5 = () => "후앙이";
//화살표 함수 - 반환값 객체
const getUser = (id) =>({id:id,name:"바선생--^"})
console.log("add3",add3(5,80));
console.log("add4",add4(0723));
console.log("getUser",getUser(292993838));
}
