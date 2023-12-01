import createElement from '../utils/createElement';

export function header() {
  return createElement('header', {}, createElement('h1', {}, '팀원 소개'));
}