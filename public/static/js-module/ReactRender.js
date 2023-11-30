import { createElement } from "./ReactCreateElement"

export function render(virtualDom) {

  // console.log(virtualDom)
  //* 처음 virtualDom은 객체기 때문에 typeof === 'string'은 의미가 없는 코드지만, virtualDom.children 안의 배열값들을 for문으로 검사할 때, render함수를 다시 쓰기 때문에 그 때 활용이 된다.
  if (typeof virtualDom === 'string') {
    // console.log(document.createTextNode(virtualDom))
    return document.createTextNode(virtualDom)
  }

  const element = document.createElement(virtualDom.type)
  //*여기서 createElement는 dom의 함수이므로 virtualDom.type에 들어있는 데이터로 태그를 만듬.

  if (virtualDom.props) {
    for (const [key, value] of Object.entries(virtualDom.props)) {
    //* Object.entries() 메소드를 사용해 virtualDom.props의 객체를 [key,value]쌍의 배열로 반환하고 그 배열들의 각 쌍을 for..of루프를 사용하여 처리한다.
      element.setAttribute(key, value)
      //* element: DOM 요소에 속성으로 설정함
    }
  }
  //* virtualDom.children의 배열값들을 하나하나 render함수를 다시 돌려준다.
  //* children의 배열값이 string이면 값이 빠져나오고 객체값일 경우 type,props,children을 다시 값들을 element의 자식속성값으로 넣어준다.
  for (let i = 0; i < virtualDom.children.length; i++) {
    const child = virtualDom.children[i]
    element.appendChild(render(child))
  }
  return element
}