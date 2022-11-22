import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// Также обрати внимание!

// Если после добавления компонента Link на 02:38 
// у тебя не происходит переход на другой роут, 
// то необходимо в index.js компонент React.StrictMode 
// переместить внутрь компонента BrowserRouter таким образом:

// eslint-disable-next-line no-lone-blocks
{/* <BrowserRouter>
    <React.StrictMode>
        <App />
    </React.StrictMode>
</BrowserRouter> */}