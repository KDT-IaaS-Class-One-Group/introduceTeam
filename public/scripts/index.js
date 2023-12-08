import animateTeamMemberName from './animate/animateTeamMemberName.js';
import backgroundMusic from './backgroundMusic.js';
// import teamMemberData from '../data/teamMemberData.js'
import animateTeamIntroduce from './animate/animateTeamIntroduce.js';
import showIntroduce from './showIntroduce.js'
import clickSoundTeamMemberName from './clickSound/clickSoundTeamMemberName.js'

showIntroduce();
animateTeamMemberName();
backgroundMusic();
animateTeamIntroduce();
clickSoundTeamMemberName();

// 화면 크기 변경 이벤트 핸들러
window.addEventListener('resize', () => {
  animateTeamMemberName(); 
  // 화면 크기가 변경될 때 애니메이션 업데이트
});