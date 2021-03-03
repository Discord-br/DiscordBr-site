 import './index.css'

export default function Documents({ data }) {
    return (
        <body className='documentsData'>
            <h2 className='title'>{data.name}</h2>
            <p className='description'>{data.description}</p>
        </body>
    );
  }