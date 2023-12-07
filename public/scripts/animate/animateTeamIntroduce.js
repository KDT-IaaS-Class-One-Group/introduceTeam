export default function animateTeamIntroduce() {
  // * 변수 이름이 적절한 것 같지 않으나 통일감을 위해서 그대로 작성한다.
  const teamMemberName = document.querySelectorAll('.teamMemberName > div');
  const introduceElement = document.querySelector('.teamMemberIntroduce');

  teamMemberName.forEach((div) => {
    div.addEventListener('click', function () {
      // 선택이 이미 되어있는지 체크
      if (introduceElement.style.left !== '-100%') {
        introduceElement.style.left = '-100%'
        setTimeout(() => {
          introduceElement.style.left = '0%';
        }, 500); // 0.5초
      } else {
        introduceElement.style.left = '0%';
      }
    });
  });
}
