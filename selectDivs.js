// 1번 모듈: Div 선택 로직
export default function selectDivs(callback) {
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
      div.addEventListener('click', () => {
        divs.forEach((x)=>{x.style.visibility = 'hidden';})
        callback(); // 콜백함수: 템플릿 페이지 불러오는 함수 넣을자리
        event.stopPropagation();
      });
    });
}