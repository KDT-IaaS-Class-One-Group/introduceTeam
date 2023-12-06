export default function animateTeamIntroduce() {
  document.querySelector('.teamMemberName > div').addEventListener('click', function() {
    var introduceElement = document.querySelector('.teamMemberIntroduce');
  
    // Toggle the left position of .teamMemberIntroduce
    if (introduceElement.style.left === '-100%') {
      introduceElement.style.left = '0%';
    } else {
      introduceElement.style.left = '-100%';
    }
  });
}