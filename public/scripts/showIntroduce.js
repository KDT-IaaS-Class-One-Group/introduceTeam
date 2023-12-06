import { teamMembers } from "../data/teamMemberData.js";

export default function showIntroduce(name) {
  const teamIntroduceDiv = document.querySelector('.teamMemberIntroduce > div')
  const teamMemberName = document.querySelectorAll('.teamMemberName > div')


  teamMemberName.forEach(fish => {
    fish.addEventListener('click', event => {
      if(fish.textContent=== teamMembers[0].name){
        teamIntroduceDiv.textContent = teamMembers[0].info
      }
      
    });

    // console.log(event.target)
    // if(event.target === teamMemberName){
    //   console.log('물고기 클릭함')
    // } else if(event.target === document.getElementById('root')){
    //   console.log('click')
    // } else if(event.target === document.querySelector('.kimhun')){
    //   console.log('김현물고기클릭')
    // }

    console.log('click')
  })

  // teamIntroduceDiv.textContent = teamMembers
}            