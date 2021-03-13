import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Heading';

const App = () => <Heading />;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
