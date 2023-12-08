import { teamMembers } from "../data/teamMemberData.js";

export default function showIntroduce(name) {
  const introduceElement = document.querySelector('.teamMemberIntroduce');
  const teamIntroduceDiv = document.querySelector('.teamMemberIntroduce > div')
  const teamMemberName = document.querySelectorAll('.teamMemberName > div')


  teamMemberName.forEach(fish => {
    fish.addEventListener('click', () => {
      teamMembers.forEach(teamMemberArray => {
        if (fish.textContent === teamMemberArray.name) {
          if (introduceElement.style.left === '-100%') {
            teamIntroduceDiv.innerHTML = teamMemberArray.info
          } else{
            setTimeout(() => {
              teamIntroduceDiv.innerHTML = teamMemberArray.info
            }, 500)
          }
        }

      })
    });
  })
}            