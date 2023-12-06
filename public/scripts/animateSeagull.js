
//todo 갈매기가 .teamMemberIntroduce div 옆에 붙도록 position을 동적으로 바꾼다.

//* 1. .teamMemberIntroduce div 동적 좌표 + 높이의 절반

export function A(){

  const teamMemberIntroduce = document.querySelector('.teamMemberIntroduce');
  console.log(teamMemberIntroduce);
  const textBox = teamMemberIntroduce.querySelector('.teamMemberIntroduce div');
  console.log(textBox);
  const seagull = teamMemberIntroduce.querySelector('.teamMemberIntroduce img');
  console.log(seagull);
}