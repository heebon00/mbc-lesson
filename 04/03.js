//구조 분해 할당 (Destructuring, 디스트럭처링)

//객체구조분해
const uesr = {
    name: "제노",
    age:20,
    job:"런쥔남편",
};
// 기존 방식
// const name1 = uesr.name;
// console.log(name1);
// const age1 = uesr.age;
// console.log(age1);
//배열구조분해할당
const {name,age} = uesr;
console.log(name,age);

//배열구조분해
const arr = [1,2,3,4,5];
// const a1 = arr[0];
// const a2 = arr[0+1];
//console.log(a1,a2);
const [n,c,t]= arr;       // 아무 임의 지정 가능   N,C,T
console.log(n,c,t)

//
// Spread  Operator
const arr1 = [1,2,3];
const arr2 = [4,5,6];
//배열합체
const arr3 = [...arr1,...arr2];
console.log(arr3);
//요소,원소 추가 
const arr4 = ["후앙이",...arr3,"제노런쥔"]
console.log(arr4);
// ========== 객체 스프레드 ==========
const user = { name: '철수', age: 20 };
// 객체 복사
const userCopy = { ...user };
//속성추가 
const user2={...userCopy,job:"LCK에서 일하고 싶엉ㅅ"};
console.log(user2);
//속성덮어쓰기
const user3 = {...user2,job:"아님 라이엇에서"}
console.log(user3);
// 여러 객체 합치기
const a = { x: 1, y: 2 };
const b = { y: 3, z: 4 };
const c = { ...a, ...b };       // y는 b의 값으로 덮어써짐
console.log(c);                 // { x: 1, y: 3, z: 4 }
