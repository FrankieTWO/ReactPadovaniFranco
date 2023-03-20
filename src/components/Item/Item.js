import './Item.css'
const Item = ({ name, img, price}) => {
    return (
        <div className="item">
        <h3>{name}</h3>
        <img src={img} alt={name}/>
        <p>Precio: ${price}</p>
    </div>
    )
}
 export default Item