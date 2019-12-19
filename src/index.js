import React from 'react';
import ReactDOM from 'react-dom';
import MarsApp from './components/MarsApp';
import * as serviceWorker from './serviceWorker';
import './index.css';


ReactDOM.render(
  <MarsApp />,
  document.getElementById('root'),
);

serviceWorker.unregister();
