import React from 'react';
import ReactDOM from 'react-dom';

import SurahList from './components/SurahList';

ReactDOM.render(
  <div>
    <SurahList />
  </div>,
  document.getElementById('app')
);

module.hot.accept();
