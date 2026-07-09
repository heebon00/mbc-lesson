//1.명명 함수
명명함수(); // 이 위치에서도 호출 가능 (호이스팅 현상)
function 명명함수(params) {
    console.log("이름있는 함수");
};

//2.익명 함수
//2-1.표현식함수

const 표현식함수 = function (m1,m2) {
    document.write(`오늘 점심이란 없다:${m1}없다${m2}없어<br>`
    )
};
표현식함수("없어","없다");
표현식함수('라면',"김밥");
//2-2.즉시실행함수
 (function(a,b){
    document.write(`<h1>즉시실행함수</h1><hr>${
       a+b
    }`);
 })(1,2);
//2-3.화살표함수
//const 화살표함수 = function() {
//onst 화살표함수 = () => { //1단 변신
const 화살표함수 =()=>document.write(`화살표함수 <br>`);
화살표함수();

const sum = (a,b) =>{return a+b;
console.log(a+b);
return;
};
sum(50,10);

