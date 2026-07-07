let currentyear = 2026;
let birthyear;
console.log(currentyear)
console.log(`birthyear : ${birthyear}`)
let age
birthyear=prompt('출생년도를 입력하세요[YYYY]','')  /* 참조 */
age = currentyear - birthyear

document.write(`당신은 ${birthyear}년도에 태어 났어 맞지?`)   /*  ${birthyear} 고정 문자가 아닌 변수 데이터 입력창 */
document.write(`당신은 올해 ${age}살 이구만 <br>`)