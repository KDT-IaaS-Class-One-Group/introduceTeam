import { teamMembersData } from '../data/teamMemberData.js';

export default function a() {
  let clicker = document.querySelector('.teamMemberName')

  clicker.addEventListener('click', () => {
    let teamMembertext = document.querySelector('.teamMemberIntroduce > div');
    for (let i = 0; i < teamMembersData.length; i++) {
      teamMembertext.innerHTML = `${teamMembersData[i].name} <br> ${teamMembersData[i].info}`
    }
  });
}