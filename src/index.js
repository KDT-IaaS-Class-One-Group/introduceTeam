import './styles/index.scss';

import { teamData } from './data/teamData';

import { render } from './utils/render';
import { hashChange } from './utils/hashChange';
import createElement from './utils/createElement';

import { header } from './components/header';
import { menu } from './components/menu';
import { memberIntro } from './components/memberIntro';
import { teamIntro } from './components/teamIntro';
import { footer } from './components/footer';


render(header(), 'root');
render(teamIntro(), 'root');
render(menu(teamData), 'root');
render(memberIntro(), 'root');
render(footer(), 'root');

window.addEventListener("hashchange", hashChange);