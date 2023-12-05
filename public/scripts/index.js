import animateTeamMemberName from './animateTeamMemberName.js';
import backgroundMusic from './backgroundMusic.js';
// import teamMemberData from '../data/teamMemberData.js'

animateTeamMemberName();
backgroundMusic();

  const teamMemberNameDivs = document.querySelectorAll(".teamMemberName > div");
  const teamMemberIntroduceDivs = document.querySelectorAll(".teamMemberIntroduce");

  teamMemberNameDivs.forEach((nameDiv, index) => {
    nameDiv.addEventListener("click", () => {
      teamMemberIntroduceDivs.forEach((introDiv, introIndex) => {
        if (index === introIndex) {
          introDiv.classList.toggle("active");
        } else {
          introDiv.classList.remove("active");
        }
      });
    });
  });
