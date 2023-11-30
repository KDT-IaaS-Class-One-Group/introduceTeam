import createElement from '../utils/createElement';

export function menu(stateData) {
  const menuItems = stateData.map(item =>
    createElement('li', {}, createElement('a', { href: item.hash }, item.name))
  );

  return createElement('nav', {}, createElement('ul', {}, ...menuItems));
}