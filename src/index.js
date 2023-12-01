import './styles/index.scss';
import { teamData } from './data/teamData';
import { render } from './utils/render';
import createElement from './utils/createElement';

import { header } from './components/header';
import { menu } from './components/menu';
import { section } from './components/section';
import { footer } from './components/footer';

render(header(), 'root');
render(menu(teamData), 'root');
render(section(), 'root');
render(footer(), 'root');

function hashChange() {
  const hash = window.location.hash.substr(1);
  const intro = document.getElementById("intro");

  switch (hash) {
    case "%EA%B9%80%ED%98%84": // 김현
      intro.innerHTML = 'a';
      break;
    case "%EC%8B%A0%EB%8F%99%ED%98%84":
      intro.innerHTML = 'b';
      break;
    case "%EC%9C%A4%EC%A4%80%ED%98%84":
      intro.innerHTML = 'c';
      break;
    case "%EC%9D%B4%EB%AF%BC%EA%B5%AC":
      intro.innerHTML = 'd';
      break;
    case "%ED%99%8D%EB%AC%B8%EA%B8%B0":
      intro.innerHTML = 'e';
      break;
    default:
      intro.innerHTML = 'f';
  }
}

window.addEventListener("hashchange", hashChange);