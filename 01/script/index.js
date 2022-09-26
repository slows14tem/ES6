/* 기존 함수 선언 방식
function funPrint(n) {
    console.log(n);
    console.log("외부 자바스크립트");
    console.log("버튼" + 1)
}
*/

//ES6+ 부터는 화살표 함수 사용
const funPrint = (n) => {
    // console.log(n);
    // console.log("외부 자바스크립트");
    console.log(`버튼${n}`); // 백틱(` -> 물결표시아래)
}
// const funif = (n) => {
//     if(n==1){
//         console.log("1번입니다.");
//     }
//     else{
//         console.log("2번입니다.");
//     }
// }