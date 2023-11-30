export function menuComponent(stateData) {

  function createElement(type, props, ...children) {
  
    return { type, props, children }
  }
  
  const menuItems = [];
  for (let i = 0; i < stateData.length; i++) {
    const item = stateData[i]
    const menuItem = createElement('li', {}, createElement('a', { href: item.hash }, item.text))
    menuItems.push(menuItem)
  }

  const menu = createElement('ul', {class: 'menu'}, ...menuItems)
  // const content = createElement('div', {}, 'Hello React')

  return createElement('div', {}, menu, content)
}