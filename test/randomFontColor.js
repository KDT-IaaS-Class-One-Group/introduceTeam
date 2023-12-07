import { randomColorname } from "./test"

export default function inrandomcolor() {
  const teamMemberName = document.querySelectorAll('.teamMemberName > div')
  
  teamMemberName.forEach((element) => {
    element.addEventListener('click', function() {
      console.log(element)
    })
  })
}


