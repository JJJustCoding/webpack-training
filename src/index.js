import _ from 'lodash';
import printMe from './print.js';

function component () {
  const div = document.createElement('div');
  div.innerHTML = _.join(['Hello', 'webpack'], ' ');

  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;
  div.appendChild(btn);
  return div;
}

document.body.appendChild(component())