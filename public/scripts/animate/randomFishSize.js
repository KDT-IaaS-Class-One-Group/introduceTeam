function getRandomSize(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateRandomDivSize() {
  const randomWidth = getRandomSize(100, 150);
  const randomHeight = getRandomSize(100, 150);

  const randomDiv = document.getElementById('randomDiv');
  randomDiv.style.width = `${randomWidth}px`;
  randomDiv.style.height = `${randomHeight}px`;
}

// 초기 크기 설정
updateRandomDivSize();

// 일정 시간 간격으로 크기 업데이트
setInterval(updateRandomDivSize, 2000); // 2초마다 변경 (원하는 간격으로 조절)