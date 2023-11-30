export function introduceComponent(stateData) {

  function createElement(type, props, ...children) {
  
    return { type, props, children }
  }
  
  for(i=0; i<stateData.length; i++){
    createElement('div',{},stateData[i])
  }
  const introduceItems = createElement('div',{},'dd')

  return createElement('div', {class: 'introduce'}, introduceItems)
}