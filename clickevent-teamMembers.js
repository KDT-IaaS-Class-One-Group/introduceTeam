export function clickEventForTeamMember(id){
  id.addEventListener('click',function(){
    document.getElementById(id).classList.toggle("display")
  })
}

