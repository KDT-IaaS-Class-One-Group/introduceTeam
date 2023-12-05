import animateTeamMemberName from './animateTeamMemberName.js';
// import backgroundMusic from './backgroundMusic.js';
import createDynamicElement from '../module/createDynamicElement.js';

console.log('hi');

const A = createDynamicElement("div",{id:"hello"});
console.log(A);
const body = document.body;
body.prepend(A);
animateTeamMemberName();
// backgroundMusic();