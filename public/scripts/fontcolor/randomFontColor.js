import randomColorname from "./randomColorname.js"

export default function inrandomcolor(time) {
  const teamMemberName = document.querySelectorAll('.teamMemberName > div')

  console.log(teamMemberName);
// setInterval을 통하여 각 요소에 대하여 램덤한 색상을 넣는 함수로 수정
  setInterval(() => {
    teamMemberName.forEach(element => {
      element.style.color = randomColorname()
    })
  }, time);
}