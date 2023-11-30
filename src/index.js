import './styles/index.scss';
import { teamData } from './data/teamData';
import createElement from './utils/createElement';
import { render, renderElement } from './utils/render';

function createMenuItem(item) {
  return createElement('li', {}, createElement('a', { href: item.hash }, item.name));
}

function createMenu(stateData) {
  const menuItems = stateData.map(createMenuItem);
  return createElement('ul', {}, ...menuItems);
}

const virtualDom = createMenu(teamData);
render(virtualDom, 'menu');