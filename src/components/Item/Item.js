import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({ id, name, img, price}) => {
    return (
        <div className="item">
        <h3>{name}</h3>
        <img src={img} alt={name}/>
        <p>Precio: ${price}</p>
        <Link to={`/item/${id}`} className="option">Ver Detalle</Link>
    </div>
    )
}
 export default Item