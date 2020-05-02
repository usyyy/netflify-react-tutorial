import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'My Minimal React Webpack Babel Setup';

const API_URL = 'https://quiet-gorge-59752.herokuapp.com';

fetch(`${ API_URL }/ayats`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();
