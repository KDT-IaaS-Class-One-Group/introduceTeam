import { teamMembers } from "../data/teamMemberData.js";

export default function showIntroduce(name) {
  const teamIntroduceDiv = document.querySelector('.teamMemberIntroduce > div')
  const teamMemberName = document.querySelectorAll('.teamMemberName > div')


  teamMemberName.forEach(fish => {
    fish.addEventListener('click', () => {
      teamMembers.forEach(teamMemberArray=>{
        if(fish.textContent === teamMemberArray.name){
          teamIntroduceDiv.innerHTML = teamMemberArray.info
          
        }
      })
    });
  })
}            