
export default function positioning(){
  
  window.onload = () => {
    const teamMemberIntroduce = document.querySelector('.teamMemberIntroduce');
    const textBox = teamMemberIntroduce.querySelector('.teamMemberIntroduce div');
    const seagull = teamMemberIntroduce.querySelector('.teamMemberIntroduce img');
    console.dir(seagull);
  
    const positionSeagull = () => {
      const textBoxRect = textBox.getBoundingClientRect();
      // const teamMemberIntroduceRect = teamMemberIntroduce.getBoundingClientRect();
  
      // textBox의 상대적인 중앙 위치 계산
      // const textBoxCenterRelative = (textBoxRect.top - teamMemberIntroduceRect.top) + (textBoxRect.height / 2);
      textBoxRect.left
      const textBoxCenterRelative = textBoxRect.top + (textBoxRect.height / 2);
      console.log(textBoxCenterRelative);
      // 갈매기 이미지 위치 조정
      // seagull.style.left = `calc(${textBoxCenterRelative}px - 100px)`;
    };
  
    positionSeagull();
    window.addEventListener('resize', positionSeagull); // 브라우저 창 크기가 변경될 때마다 위치 재조정
  }
};