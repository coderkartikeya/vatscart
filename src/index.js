import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react';
import {Context} from './context/context';

// AIzaSyAsurDD9mtpFdeErHElCAhw-9pPIYFdyvI google api key


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <HashRouter>
  <Context>
  

  <App/>

  </Context>
  

  </HashRouter>
  
  
  
  
);

