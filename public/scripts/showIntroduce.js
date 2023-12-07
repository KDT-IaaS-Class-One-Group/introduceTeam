import { teamMembers } from "../data/teamMemberData.js";

export default function showIntroduce(name) {
  const teamIntroduceDiv = document.querySelector('.teamMemberIntroduce > div')
  const teamMemberName = document.querySelectorAll('.teamMemberName > div')


  teamMemberName.forEach(fish => {
    fish.addEventListener('click', event => {
      teamMembers.forEach(teamMemberArray=>{
        if(fish.textContent === teamMemberArray.name){
          teamIntroduceDiv.textContent = teamMemberArray.info
        }
      })

      // const teamNameArray = teamMembers[0]
      // if(fish.textContent === teamNameArray.name){
        // teamIntroduceDiv.textContent = teamNameArray.info
      // } 

      
    });

  })

  // teamIntroduceDiv.textContent = teamMembers
}            