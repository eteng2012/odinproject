import _ from 'lodash';
import printMe from './print.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

 function component() {
   const element = document.createElement('div');
   const button = document.createElement('button');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   button.innerHTML = 'Click me and check the console!';
   button.addEventListener('click', () => {printMe()});
   element.appendChild(button);

   return element;
 }

 document.body.appendChild(component());