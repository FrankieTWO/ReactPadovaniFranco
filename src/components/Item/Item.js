import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({ id, name, img, price}) => {
    return (
        <div className="item">
        <h3>{name}</h3>
        <div><img src={img} alt={name} className="imagenItem"/></div>
        <p>Precio: ${price}</p>
        <Link to={`/item/${id}`} className="option">More</Link>
    </div>
    )
}
 export default Item