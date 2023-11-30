import './styles/index.scss';
import { teamData } from './data/teamData';
import createElement from './utils/createElement';
import { render, renderElement } from './utils/render';
import { menu } from './components/menu';


const virtualDom = menu(teamData);
render(virtualDom, 'menu');