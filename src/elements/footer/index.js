/* eslint-disable react-hooks/rules-of-hooks */
import './index.css';
import { useState } from 'react';

function footer() {
  const [theme, setTheme] = useState('light');
  const r =  document.querySelector(':root');
  const toggleTheme = () => {
    if (theme === 'light') {
      r.style.setProperty('--background-color', 'rgb(0, 0, 0)');
      r.style.setProperty('--color', 'rgb(255,255,255)');
      setTheme('dark')
    } else {
      r.style.setProperty('--background-color', 'rgb(255,255,255)');
      r.style.setProperty('--color', 'rgb(0, 0, 0)');
      setTheme('light')
    }
  };

  return (
    <div className="footer">
      <footer className="footer-footer">
        <text>Discord-Br.js </text>
        <text>Aqui tem potência com a API do Discord</text>
        <text>0 download, 2 star, 2 contribuição</text>
        <button onClick={() => toggleTheme()}>
        {theme === 'light' ? <strong>tema escuro 🕯 </strong> : <strong>tema claro 💡</strong>}
        </button>
      </footer>
    </div>
  );
}

export default footer;
