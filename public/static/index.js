//* js 모듈
import { menuComponent } from "./js-module/menuComponent.js"
import { render } from "./js-module/render.js"
import { onMenuClick } from "./js-module/onMenuClick.js"
// import { introduceComponent } from "./js-module/introduceComponent.js"

//* data
import { menuData } from "./data/menu.js"
// import { introduceData } from "./data/introduce.js"

export function load(){
  document.addEventListener('DOMContentLoaded',function(){
    const container = document.getElementById('root')

    const menuVirtualDom = menuComponent(menuData, onMenuClick)
    container.appendChild(render(menuVirtualDom))

    // const introduceVirtualDom = introduceComponent(introduceData, onMenuClick)
    // container.appendChild(render(introduceVirtualDom))
    
    
  })
}