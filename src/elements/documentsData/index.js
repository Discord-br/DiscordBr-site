 import './index.css';
 import Parser from "./sub-elements/propertiesParser"
 import Loading from "../loading-screen"
 import { CopyBlock,dracula } from "react-code-blocks";


export default function Documents({ data }) {

    return (
        data ?
        <body className='documentsData'>
            <h2 className='title'>{data.name}</h2>
            <p className='description'>{data.description}</p>
            <div className='usage'>
                <CopyBlock text={data.usage} language='js'  theme={dracula}  codeBlock/>
            </div>
            <div className='properties' >
                {
                        Object.keys(data.properties).map(item => {
                            return <Parser url={data.properties[item]} name={item} />
                          })
                }
            </div>
        </body>
        : <Loading/>
    );
  }