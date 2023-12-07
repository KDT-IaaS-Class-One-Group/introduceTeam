// 랜덤한 숫자를 만드는 함수
// RGB는 16진수로 표현되므로 (0~f까지 표시) 랜덤함수의 최대값은 16으로 작성
// to.String(16)으로 처리시 16진수로 바뀜
export default function randomColorname() {

  function getRandomDigit() {
    const randomdigit = Math.floor(Math.random() * 16)
    return randomdigit.toString(16)
  }
  
  // console.log(getRandomDigit())
  // color에 스트링형식으로 붙이는 함수 작성 
  function generateRandomColor() {
    let color = '#'
    for (let i=0; i<6; i++) {
      color += getRandomDigit();
    }
    return color;
  }
  let randomcolor = generateRandomColor();
  return randomcolor
} 


// console.log(randomColorname())