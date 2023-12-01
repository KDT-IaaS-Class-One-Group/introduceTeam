export function hashChange() {
  const hash = window.location.hash.substr(1);
  const intro = document.getElementById("intro");

  switch (hash) {
    case "%EA%B9%80%ED%98%84": // 김현
      intro.innerHTML = 'a';
      break;
    case "%EC%8B%A0%EB%8F%99%ED%98%84": // 신동현
      intro.innerHTML = 'b';
      break;
    case "%EC%9C%A4%EC%A4%80%ED%98%84": // 윤준현
      intro.innerHTML = 'c';
      break;
    case "%EC%9D%B4%EB%AF%BC%EA%B5%AC": // 이민구
      intro.innerHTML = 'd';
      break;
    case "%ED%99%8D%EB%AC%B8%EA%B8%B0": // 홍문기
      intro.innerHTML = 'e';
      break;
    default: // 기타
      intro.innerHTML = 'f';
  }
}
