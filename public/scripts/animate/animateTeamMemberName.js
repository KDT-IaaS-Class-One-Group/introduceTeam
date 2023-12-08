export default function animateTeamMemberName() {
  const teamMemberName = document.querySelectorAll('.teamMemberName > div');
  
  // 화면 너비 업데이트 함수
  const updateWindowWidth = () => {
    windowWidth = window.innerWidth;
    console.log(windowWidth);
  }
  
  let windowWidth = window.innerWidth; // 초기 창 너비
  
  // 각 요소마다 웨이브 로직 할당
  teamMemberName.forEach((div, index) => {
    // 각 요소 시작 위치
    let horizontalPosition = 100 * index;
    // 높이 기준점
    let verticalPosition = 100;
    // 시작 방향 랜덤 설정, PI는 180도 역할을 한다.
    // 이후 sin()메서드에 들어가면 시작 방향을 결정하는 역할
    let wavePhase = Math.random() * 2 * Math.PI;
    // 각 요소당 랜덤 속도를 부여해준다. 프레임마다 움직이는 숫자를 부여하는 역할
    let horizontalSpeed = 0.5 + Math.random();

    // 프레임마다 추가되는 것, 속도를 결정한다.
    // wavePhase와 함께 사용되기 때문에 이것만 수정하면 속도가 수정된다.
    const waveSpeed = 0.02;
    // 그래프 높이, 최대 높이를 수정한다. 사인함수와 곱해지며 작동된다.
    const waveAmplitude = 100;
    // 방향을 결정하는 로직이다. 이후에 -1을 곱하기 위한 변수이다.
    let direction = 2;

    const animate = () => {
      const divWidth = div.offsetWidth;
  
      horizontalPosition += horizontalSpeed * direction;
      if (horizontalPosition <= 0 || (horizontalPosition + divWidth) >= windowWidth) {
        direction *= -1;
      }
  
      wavePhase += waveSpeed;
      verticalPosition = 100 + waveAmplitude * Math.sin(wavePhase);
  
      div.style.left = `${horizontalPosition}px`;
      div.style.bottom = `${verticalPosition}px`;
  
      requestAnimationFrame(animate);
    }  
    animate()
  });
  // 리사이즈가 되면 windowWidth가 변경되는 이벤트 실행
  window.addEventListener('resize', updateWindowWidth);
}