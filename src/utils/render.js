/**
 * 
 * @param {*} virtualDom 
 * @returns 
 */
export function renderElement(virtualDom) {
  if (typeof virtualDom === 'string') {
    return document.createTextNode(virtualDom);
  }

  const element = document.createElement(virtualDom.type);

  if (virtualDom.props) {
    for (const [key, value] of Object.entries(virtualDom.props)) {
      element.setAttribute(key, value);
    }
  }

  virtualDom.children.forEach(child => {
    element.appendChild(renderElement(child));
  });

  return element;
}

/**
 * html에 작성된 div를 인식하여 (conTainerId)
 * 전달된 객체 값(virtualDom)이 들어가 랜더링되는 실행함수 
 * @param {*} virtualDom 
 * @param {*} containerId 
 * @returns 
 */
export function render(virtualDom, containerId) {
  const container = document.getElementById(containerId);
  container.appendChild(renderElement(virtualDom));
}