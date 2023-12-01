import createElement from '../utils/createElement';

export function teamIntro() {
  return createElement('section', {}, createElement('h2', {}, '팀원 소개'), createElement('p', {}));
}