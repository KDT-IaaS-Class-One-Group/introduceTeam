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

window.addEventListener("hashchange", () => {
  const intro = document.getElementById("intro");

  const hash = window.location.hash.substr(1);

  switch (hash) {
    case "김현":
      intro.innerHTML = "a";
      break;
    case "신동현":
      intro.innerHTML = createElement('p', { style: "color:blue;" }, ["gd"]);
      break;
    case "윤준현":
      intro.innerHTML = createElement('p', { style: "color:blue;" }, ["gd"]);
      break;
    case "이민구":
      intro.innerHTML = createElement('p', { style: "color:blue;" }, ["gd"]);
      break;
    case "홍문기":
      intro.innerHTML = createElement('p', { style: "color:blue;" }, ["gd"]);
      break;
    default:
      intro.innerHTML = createElement("h1", {}, ["반갑습니다. 접속할 때 보이는 페이지(처럼보이는) element입니다. "])
  }

  window.dispatchEvent(new Event("hashchange"));
});