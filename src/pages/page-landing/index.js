import './App.css';

function App() {
  return (
      <body className="App">
        <div className='infos'>
       <div className='about'>
      <h2 >Sobre</h2>
         <p>A biblioteca discord-br é um modulo criado para facilitar a conecção com a <a href='https://discord.com/developers/docs/intro'>API do Discord</a> por 
         meio do <a href='https://nodejs.org/pt-br/'>Node.js</a>, que executa o JavaScript sem o uso de um navegador, então, certifique-se de que você tenha o <a href='https://nodejs.org/pt-br/'>Node.js</a> instalado em sua maquina
         </p>
       </div>
         <div>
       <h2 className='example'>Exemplo</h2>
       <img href='example.gif' alt='example.gif'></img>
        </div>
       </div>
       <div className='data'>
       <div className='reasons'>
      <h2>Motivos Para Usar</h2>
         <ul>
           <li>Mais de 90% da Biblioteca está em portugues</li>
           <li>PCC é gay</li>
           <li>Se vc n usar vc é homofobicos</li>
         </ul>
       </div>
       </div>
      </body>
  );
}
export default App;
