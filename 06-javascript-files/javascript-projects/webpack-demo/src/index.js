import _ from 'lodash';
// Imports library downloaded from npm
import myName from './myName';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        // Outputs combination of strings with ' ' in between

    element.textContent = myName('Cody');
    return element;
}
  
document.body.appendChild(component());