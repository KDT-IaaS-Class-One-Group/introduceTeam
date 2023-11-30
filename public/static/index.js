// import { component } from "./module/ReactComponent"
// import { render } from "./ReactRender"


export function load(){
  document.addEventListener('DOMContentLoaded',function(){

    function createElement(type, props, ...children) {
      return { type, props, children }
    }

    function component(stateData) {
      const menuItems = [];
      for (let i = 0; i < stateData.length; i++) {
        const item = stateData[i]
        const menuItem = createElement('li', {}, createElement('a', { href: item.hash }, item.text))
        menuItems.push(menuItem) 
      }

      const menu = createElement('ul', {}, ...menuItems)
      const content = createElement('div', {}, 'Hello React')
  
      return createElement('div', {}, menu, content)
    }

    function render(virtualDom) {
      if (typeof virtualDom === 'string') {
        return document.createTextNode(virtualDom)
      }

      const element = document.createElement(virtualDom.type)
      
      if (virtualDom.props) {
        for (const [key, value] of Object.entries(virtualDom.props)) {
          element.setAttribute(key, value)
        }
      }
      
      for (let i = 0; i < virtualDom.children.length; i++) {
        const child = virtualDom.children[i]
        element.appendChild(render(child))
      }

      return element
    }

    const stateData = [
      { hash: '#김현', text: '김현' },
      { hash: '#이민구', text: '이민구' },
      { hash: '#윤준현', text: '윤준현' },
      { hash: '#신동현', text: '신동현' },
      { hash: '#홍문기', text: '홍문기' }
    ]

    const virtualDom = component(stateData)
    const container = document.getElementById('root')
    container.appendChild(render(virtualDom))
  })
}