import './styles/index.scss';

import { teamData } from './data/teamData';

import { render } from './utils/render';
import { hashChange } from './utils/hashChange';
import createElement from './utils/createElement';

import { header } from './components/header';
import { menu } from './components/menu';
import { section } from './components/section';
import { footer } from './components/footer';


render(header(), 'root');
render(menu(teamData), 'root');
render(section(), 'root');
render(footer(), 'root');

window.addEventListener("hashchange", hashChange);