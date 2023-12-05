/**
 * 실행함수로서, element를 생성하고 속성을 세팅해주는 로직입니다.
 * @param {String} elementType 
 * @param {Object} attributes 
 * @returns 실행 함수
 */
export default function createDynamicElement(elementType, attributes) {
  const element = document.createElement(elementType);
  
  // 속성(attributes)이 제공된 경우 속성을 요소에 추가
  if (attributes) {
      for (const key in attributes) {
          if (attributes.hasOwnProperty(key)) {
              element.setAttribute(key, attributes[key]);
          }
      }
  }

  return element;
}