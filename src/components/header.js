import createElement from '../utils/createElement';

export function header() {
  return createElement('header', {}, createElement('h1', {}, 'form 미쳤다'));
}