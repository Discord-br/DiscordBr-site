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
            <a href='https://github.com/Discord-br'>
                Github
            </a>
            <a href='https://discord.gg/9KA5D6PVVF'>
                Ajuda
            </a>
        </ul>
      </header>
    </div>
  );
}

export default NavBar;
