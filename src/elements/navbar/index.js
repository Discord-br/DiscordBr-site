import './index.css';

function NavBar() {
  return (
    <div className="NavBar">
      <header className="NavBar-header">
        <div className="NavBar-title">
            <ul>
            <a href='/'>
              Discord - BR
              </a>
            </ul>
          </div>
        <ul className="NavBar-buttons">
            <a href='/documentacao'>
                Documentação
            </a>
            <a href='https://google.com'>
                Github
            </a>
            <a href='https://google.com'>
                Ajuda
            </a>
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
