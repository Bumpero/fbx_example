
console.log('INSIDE MAIN.JS 7');

require('./ListyElement/ListyElement.css');

import ListyElement from './ListyElement/ListyElement';

const main = () => {
  console.log('Start of main function');
  
  const _listyElement = new ListyElement();

  const mainContainer = _listyElement.element;
  
  document.body.appendChild(mainContainer)
  
  console.log('End of main function');

}

main();





