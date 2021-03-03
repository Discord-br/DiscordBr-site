import './index.css';
//import documents from '../../config/documents'
//import Loading from '../../elements/loading-screen'
import DocumentsList from '../../elements/documentsList'
import DocumentsData from '../../elements/documentsData'
import Docs from './events.json'

function App( {match}) {

  return (
      <body className="App">
        <div className='title'>
          <h1>Documentação</h1>
        </div>
        <div className='itens'>
        { match.params.name ? 

        Object.values(Docs).map(doc => {
          if(doc.name === match.params.name) {
            return <DocumentsData data={doc}/>
        }
        return null
      })
         :
        Object.values(Docs).map(doc => {
          return <DocumentsList name={doc.name}/>
        })
      }
        </div>
      </body>
  );
}

export default App;
