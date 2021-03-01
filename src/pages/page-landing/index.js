import './App.css';
import gif from '../../assets/Code.gif'

import {CopyToClipboard} from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast.success('✅ Copiado com sucesso', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
  });;

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
       <img src={gif} alt='example.gif'></img>
       <CopyToClipboard text='oie'
          onCopy={notify}
          >
          <button className='copy'>Copiar código</button>
        </CopyToClipboard>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        </div>
       </div>
       <div className='data'>
       <div className='reasons'>
      <h2>Motivos Para Usar</h2>
         <ul>
           <li>Mais de 90% da Biblioteca está em portugues</li>
           <li>Comunidade falante da língua portuguesa</li>
           <li>Facil Utilização e Compreensão</li>
         </ul>
       </div>
       </div>
      </body>
  );
}
export default App;
