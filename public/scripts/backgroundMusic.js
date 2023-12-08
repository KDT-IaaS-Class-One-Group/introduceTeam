// backgroundMusic.js
let audioElement; // 단일 인스턴스를 저장할 변수

export default function backgroundMusic() {
  if (!audioElement) {
    audioElement = document.createElement('audio');
    const sourceElement = document.createElement('source');
    audioElement.id = 'bgm';
    audioElement.autoplay = true;
    sourceElement.src = './sounds/bgm.mp3';
    sourceElement.type = 'audio/mp3';
    audioElement.appendChild(sourceElement);
    document.getElementById('root').appendChild(audioElement);
  }
}
