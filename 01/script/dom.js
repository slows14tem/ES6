//function 키워드로 함수 생성
// function show(){
//     console.log("show");
// }

//화살표 함수에 명령이 한줄만 있을 때는 {} 생략 가능
// const show = () => console.log("show")
//return문 하나일때는 "return"도 생략 가능
// const show = () => 10;

//화살표 함수형식으로 생성
// const show = () => {
//     console.log("show");
//     const msgId = document.querySelector("#msg");

    // msgId.innerHTML = "<h2>페이스북</h2>";
    // msgId.innerText = "<h2>페이스북</h2>";
    // console.log(msgId.innerHTML);
    // console.log(msgId.innerText);
    // msgId.textContent = "<h2>페이스북</h2>";
    // console.log(msgId.textContent)
    
    // 렌덤 주사위
    // let ranCnt = Math.floor(Math.random() * 6) + 1;
    // console.log(ranCnt);
    // let tag = `<div class="msgDiv"><img src="./images/${ranCnt}.png" id="img${ranCnt}"></div>`;

    // 모든 주사위
    // let tag = "";
    // for(let i=1; i<=6; i++){
    //     // tag = tag + `<div class="msgDiv">${i}</div>`
    //     tag += `<div class="msgDiv"><img src="./images/${i}.png" id="img${i}"></div>`
    // }
    
    // msgId.innerHTML = tag;
    //스타일 변경
    // msgId.getComputedStyle = "red";
// }


// 주사위 프로젝트
const show = () => {
    const msgId = document.querySelector("#msg");
    msgId.style.display = "none"
    const oxImg = document.querySelector("#msgWR");
    oxImg.style.display = "none"
    const choiceNum = document.querySelector("#choiceNum");
    choiceNum.style.display = "block"
    const but1 = document.querySelector(".bt1");
    but1.style.display = "none"
    const but2 = document.querySelector(".bt2");
    but2.style.display = "block"
}

const dice = () => {
    const msgId = document.querySelector("#msg");
    msgId.style.display = "block"
    const oxImg = document.querySelector("#msgWR");
    oxImg.style.display = "block"
    const choiceNum = document.querySelector("#choiceNum");
    choiceNum.style.display = "none"
    const but1 = document.querySelector(".bt1");
    but1.style.display = "block"
    const but2 = document.querySelector(".bt2");
    but2.style.display = "none"
    let ranCnt = Math.floor(Math.random() * 6) + 1;
    let tag = `<div class="msgDiv"><img src="./images/${ranCnt}.png" id="img${ranCnt}"></div>`;
    msgId.innerHTML = tag;
    
    const diceNodeList = document.getElementsByName("Cnt");
    diceNodeList.forEach((node) => {
        if(node.checked)  {
            // choiceNum.innerHTML = `'<div>${node.value}</div>'`
            if(ranCnt == node.value) {
                oxImg.innerHTML = '<div><img src="./images/o.png"></div>'
            }
            else {
                oxImg.innerHTML = '<div><img src="./images/x.png"></div>'
            }
        }
    })   
}

document.addEventListener("DOMContentLoaded", () => {
    const choiceNum = document.querySelector("#choiceNum");
    choiceNum.style.display = "none"
    const but2 = document.querySelector(".bt2");
    but2.style.display = "none"
})