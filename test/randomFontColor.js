import randomColorname from "./random.js"

export default function inrandomcolor() {
  const teamMemberName = document.querySelectorAll('.teamMemberName > div')
  
  console.log(teamMemberName)
  teamMemberName.forEach((element) => {
    element.addEventListener('click', function(event) {
      event.target.style.color = randomColorname()
      // event. = `RGB(${randomColorname})`
    })
  })
}

