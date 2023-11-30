import './styles/index.scss';
import teamData from './data/teamData';
import render from './utils/render';

import { header } from './components/header';
import { menu } from './components/menu';
import { section } from './components/section';
import { footer } from './components/footer';

render(header(), 'root');
render(menu(teamData), 'root');
render(section(), 'root');
render(footer(), 'root');