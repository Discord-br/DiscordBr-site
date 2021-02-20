/* eslint-disable react-hooks/rules-of-hooks */
import './index.css';
import { useState, useEffect } from 'react';

function footer() {
  const [theme, setTheme] = useState('light');
  const r =  document.querySelector(':root');
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      r.style.setProperty('--background-color', 'rgb(0, 0, 0)');
      r.style.setProperty('--color', 'rgb(255,255,255)');
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      r.style.setProperty('--background-color', 'rgb(255,255,255)');
      r.style.setProperty('--color', 'rgb(0, 0, 0)');
      setTheme('light')
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  return (
    <div className="footer">
      <footer className="footer-footer">
        <text>Discord-Br.js </text>
        <text>Aqui tem potência com a API do Discord</text>
        <text>0 download, 2 star, 2 contribuição</text>
        <button onClick={() => toggleTheme()}>
        {theme === 'light' ? <strong>desligar as luzes</strong> : <strong>ligar as luzes</strong>}
        </button>
      </footer>
    </div>
  );
}

export default footer;
