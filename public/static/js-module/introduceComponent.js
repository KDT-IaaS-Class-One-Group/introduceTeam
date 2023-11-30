export function introduceComponent(stateData) {

  function createElement(type, props, ...children) {
  
    return { type, props, children }
  }
  
  const menuItems = [];
  for (let i = 0; i < stateData.length; i++) {
    const item = stateData[i]
    
    const menuItem = createElement('li', {}, createElement('a', { href: item.hash, onClick: () => onMenuClick(item.hash) }, item.text))
    //* 콜백함수를 사용해서 hash이름일 때 onclick함수를 실행한다.
    menuItems.push(menuItem)
  }

  const menu = createElement('div', {class: 'introduce'}, ...menuItems)
  // const content = createElement('div', {}, 'Hello React')

  return createElement('div', {}, menu)
}