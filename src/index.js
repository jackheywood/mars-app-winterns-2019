import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MarsApp from './components/MarsApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <MarsApp />,
  document.getElementById('root')
);

serviceWorker.unregister();
