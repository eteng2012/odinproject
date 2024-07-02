import _ from 'lodash';
import './style.css';
import example from './example.svg';
import data from './example.xml';
import bigdata from './example.csv';
import toml from './data.toml';
console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`
console.log(toml.owner.bio);

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = example;
 
   element.appendChild(myIcon);
   console.log(data);
   console.log(bigdata);

   return element;
 }

 document.body.appendChild(component());