//* js 모듈
import { menuComponent } from "./js-module/menuComponent.js"
import { render } from "./js-module/render.js"
import { onMenuClick } from "./js-module/onMenuClick.js"

//* data
import { stateData } from "./data/menu.js"

export function load(){
  document.addEventListener('DOMContentLoaded',function(){

    const virtualDom = menuComponent(stateData, onMenuClick)
    const container = document.getElementById('root')
    container.appendChild(render(virtualDom))
  })
}