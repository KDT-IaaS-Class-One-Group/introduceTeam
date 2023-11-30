import createElement from '../utils/createElement';

export function footer() {
  return createElement('footer', {}, createElement('p', {}, '\u00A9 2023 form 미쳤다'));
}