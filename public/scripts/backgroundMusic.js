export default function backgroundMusic() {
  const audioElement = document.createElement('audio');
  const sourceElement = document.createElement('source');
  audioElement.id = 'bgm';
  audioElement.autoplay = true;
  sourceElement.src = './sounds/bgm.mp3';
  sourceElement.type = 'audio/mp3';
  audioElement.appendChild(sourceElement);
  document.getElementById('root').appendChild(audioElement);
}
