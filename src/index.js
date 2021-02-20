import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Router from './pages/router';
import NavBar from './elements/navbar';
import Footer from './elements/footer';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Router />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
