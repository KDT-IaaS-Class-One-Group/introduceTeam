export default function animate() {
  // 윈도우 너비 확인
  const windowWidth = window.innerWidth;
  const divWidth = div.offsetWidth;

  // 가로 위치 업데이트 및 경계 확인
  horizontalPosition += horizontalSpeed * direction;
  if (horizontalPosition <= 0 || (horizontalPosition + divWidth) >= windowWidth) {
      direction *= -1; // 방향 전환
  }

  // 물결 움직임 계산
  wavePhase += waveSpeed;
  verticalPosition = 200 + waveAmplitude * Math.sin(wavePhase);

  // div 위치 업데이트
  div.style.left = `${horizontalPosition}px`;
  div.style.top = `${verticalPosition}px`;

  requestAnimationFrame(animate);
}
