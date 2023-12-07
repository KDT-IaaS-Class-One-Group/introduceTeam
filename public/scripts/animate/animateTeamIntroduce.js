export default function animateTeamIntroduce() {
  // * 변수 이름이 적절한 것 같지 않으나 통일감을 위해서 그대로 작성한다.
  const teamMemberName = document.querySelectorAll('.teamMemberName > div');
  const introduceElement = document.querySelector('.teamMemberIntroduce');

  function leftHund(element){
    awaitelement.style.left = "-100%";  
  }

  function leftZero(element){
    element.style.left = "0";  
  }
  async function test(){
    const one = await leftHund();
    const two = await leftZero();
    one(); two();
  }
  teamMemberName.forEach((div) => {
    div.addEventListener('click', function() {
      // Toggle the left position of .teamMemberIntroduce
      if (introduceElement.style.left === '-100%') {
        introduceElement.style.left = '0%';
      } else {
        test();
      }
    });
  })
}
