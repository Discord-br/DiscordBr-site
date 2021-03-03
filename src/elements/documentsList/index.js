import './index.css'

export default function Documents({ name }) {
    return (
      <a className="documentsList" href={'./documentacao/'+ name}> {name} </a>
    );
  }