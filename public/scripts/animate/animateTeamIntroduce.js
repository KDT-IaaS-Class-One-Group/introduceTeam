export default function animateTeamIntroduce() {
  // * 변수 이름이 적절한 것 같지 않으나 통일감을 위해서 그대로 작성한다.
  const teamMemberName = document.querySelectorAll('.teamMemberName > div');
  const introduceElement = document.querySelector('.teamMemberIntroduce');
  const profileName = document.querySelector('.profile > h3');

  // memo1 : style.left가 -100 일때, 클릭한 것이 물고기 이름과 프로필 이름이 다르면 들어갔다가 상태를 바꾸고 다시 창을 띄워줍니다.
  // memo2 : 시작은 클릭한 것을 비교하여 그대로 가져온다.
  // memo3 : 여기서 나온 메모들을 모으는 실행 함수를 만들어야 한다.

  teamMemberName.forEach((div) => {
    div.addEventListener('click', function () {
      console.dir(div);
      console.log(profileName.innerText);
      // 클릭된 이름과 프로필이름이 동일하지 않으면
      if(div.innerHTML !== profileName.innerText){
        // 올라간다.
        if (introduceElement.style.left == '-100%') {
          introduceElement.style.left = '0';
        } else {
          introduceElement.style.left = '-100%';
        }
      }
    });
  });
}
