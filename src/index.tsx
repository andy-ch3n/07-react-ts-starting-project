import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root')); //default
//https://blog.logrocket.com/how-to-use-typescript-with-react-18-alpha/ error with tsx

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
