// 2번 모듈: 배경 클릭 로직
export default function backgroundClickToShowDivs() {
  document.body.addEventListener('click', () => {
    console.log("body click event active");
      // ! divs를 타겟에 맞춰 바꿔야 한다.
      const divs = document.querySelectorAll('div');
      setTimeout
      divs.forEach(div => div.style.visibility = ''); // 모든 div 보이기
  });
}