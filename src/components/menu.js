import createElement from '../utils/createElement';

export function menu(stateData) {
  return createElement('ul', {}, ...stateData.map(item =>
    createElement('li', {}, createElement('a', { href: item.hash }, item.name))
  ));
}