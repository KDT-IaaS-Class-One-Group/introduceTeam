import randomColorname from "./random.js"

export default function inrandomcolor() {
  const teamMemberName = document.querySelectorAll('.teamMemberName > div')

  console.log(teamMemberName);

  setInterval(() => {
    teamMemberName.forEach(element => {
      element.style.color = randomColorname()
    })
  }, 500);
}