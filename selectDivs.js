// 1번 모듈: Div 선택 로직
export default function selectDivs(callback) {
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
      div.addEventListener('click', () => {
        divs.forEach((x)=>{x.style.visibility = 'hidden';})
        callback(); // 콜백 함수 실행
        event.stopPropagation();
      });
    });
}