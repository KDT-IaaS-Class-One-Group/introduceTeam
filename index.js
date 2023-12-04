console.log('script started');

import backgroundClickToShowDivs from "./backgroundClickToShowDivs.js";
import selectDivs from "./selectDivs.js";

// // 1번 모듈: Div 선택 로직
// function selectDivs(callback) {
  //     const divs = document.querySelectorAll('div');
  //     divs.forEach(div => {
    //         div.addEventListener('click', () => {
      //           divs.forEach((x)=>{x.style.visibility = 'hidden';})
      //           callback(); // 콜백 함수 실행
      //           //callback: 소개 템플릿 불러오는 함수
//         });
//     });
// }

// // 2번 모듈: 배경 클릭 로직
// function backgroundClickToShowDivs() {
//     document.body.addEventListener('click', () => {
//       console.log("body click event active");
//         // ! divs를 타겟에 맞춰 바꿔야 한다.
//         const divs = document.querySelectorAll('div');
//         divs.forEach(div => div.style.display = ''); // 모든 div 보이기
//     });
// }

// 3번 모듈 : 좌우로 헤엄치는 로직 구현
function animateDivs() {
    const divs = document.querySelectorAll('div');
    divs.forEach((div, index) => {
        let horizontalPosition = 100 * index;
        let verticalPosition = 200;
        let wavePhase = Math.random() * 2 * Math.PI;
        let horizontalSpeed = 0.5 + Math.random();
        const waveSpeed = 0.02;
        const waveAmplitude = 100;
        let direction = 1; // 이동 방향 (1: 오른쪽, -1: 왼쪽)

        function animate() {
            // 윈도우 너비 확인
            const windowWidth = window.innerWidth;
            const divWidth = div.offsetWidth;

            // 가로 위치 업데이트 및 경계 확인
            horizontalPosition += horizontalSpeed * direction;
            if (horizontalPosition <= 0 || (horizontalPosition + divWidth) >= windowWidth) {
                direction *= -1; // 방향 전환
            }

            // 물결 움직임 계산
            wavePhase += waveSpeed;
            verticalPosition = 200 + waveAmplitude * Math.sin(wavePhase);

            // div 위치 업데이트
            div.style.left = `${horizontalPosition}px`;
            div.style.top = `${verticalPosition}px`;

            requestAnimationFrame(animate);
        }
        animate();
    });
}

selectDivs(()=>{
  console.log('selectDivs 함수 실행 완료');
  setTimeout(()=>{
    backgroundClickToShowDivs()
  }, 1000)
});
animateDivs();



