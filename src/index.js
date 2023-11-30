// index.js
import './styles/index.scss';
import { stateData } from './data/teamData';

function createElement(type, props, ...children) {
  return { type, props, children };
}

function component(stateData) {
  const menuItems = [];
  for (let i = 0; i < stateData.length; i++) {
    const item = stateData[i];
    const menuItem = createElement('li', {}, createElement('a', { href: item.hash }, item.name));
    menuItems.push(menuItem);
  }
  return createElement('ul', {}, ...menuItems);
}

function render(virtualDom) {
  if (typeof virtualDom === 'string') {
    return document.createTextNode(virtualDom);
  }
  const element = document.createElement(virtualDom.type);
  if (virtualDom.props) {
    for (const [key, value] of Object.entries(virtualDom.props)) {
      element.setAttribute(key, value);
    }
  }
  for (let i = 0; i < virtualDom.children.length; i++) {
    const child = virtualDom.children[i];
    element.appendChild(render(child));
  }
  return element;
}

const virtualDom = component(stateData);
const container = document.getElementById('menu');
container.appendChild(render(virtualDom));
