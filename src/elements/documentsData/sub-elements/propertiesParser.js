import './index.css';

export default function Parser({ url, name }) {
   return (
         <ul className="ul-parser">
            <a className="a-parser" href={url}>{name}</a>
         </ul>
   );
 }