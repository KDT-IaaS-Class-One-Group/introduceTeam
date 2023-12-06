export default function clickSoundTeamMemberName() {
  // 사운드를 재생할 audio 엘리먼트 생성
  const audioElement = document.createElement('audio');
  const sourceElement = document.createElement('source');
  audioElement.id = 'bgm';
  sourceElement.src = './sounds/click.mp3';
  sourceElement.type = 'audio/mp3';
  audioElement.appendChild(sourceElement);
  document.getElementById('root').appendChild(audioElement);

  // 팀 멤버 이름에 대한 NodeList 얻기
  const teamMemberNames = document.querySelectorAll('.teamMemberName > div');

  // 각 팀 멤버 이름에 클릭 이벤트 추가
  teamMemberNames.forEach((teamMemberName) => {
    teamMemberName.addEventListener('click', () => {
      // 클릭 시 사운드 재생
      audioElement.play();
    });
  });
}
